import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';
import 'package:flutter_website/utils/utils.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:responsive_framework/responsive_framework.dart';

class WebsiteMenuBar extends StatelessWidget {
  const WebsiteMenuBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 80,
      decoration: const BoxDecoration(
        color: background,
        boxShadow: [
          BoxShadow(color: backgroundDark, offset: Offset(0, 2), blurRadius: 4)
        ],
      ),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Row(
        children: <Widget>[
          MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () =>
                  Navigator.of(context).popUntil((route) => route.isFirst),
              child: Padding(
                padding: const EdgeInsets.fromLTRB(0, 5, 8, 5),
                child: Image.asset("assets/home/logo.png",
                    height: 45, fit: BoxFit.contain),
              ),
            ),
          ),
          const Spacer(),
          MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () => openUrl('https://www.instagram.com/smartnote.gpw/'),
              child: const Padding(
                padding: EdgeInsets.symmetric(horizontal: 8),
                child: Icon(
                  FontAwesomeIcons.instagram,
                  size: 24,
                  color: backgroundDark,
                ),
              ),
            ),
          ),
          MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () => openUrl('mailto:ganeshkej@gmail.com'),
              child: const Padding(
                padding: EdgeInsets.symmetric(horizontal: 8),
                child: Icon(
                  Icons.mail,
                  size: 24,
                  color: backgroundDark,
                ),
              ),
            ),
          ),
          MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () => openUrl('https://goo.gl/maps/Q3Kx8KAHHd1LvMyV9'),
              child: const Padding(
                padding: EdgeInsets.symmetric(horizontal: 8),
                child: Icon(
                  FontAwesomeIcons.mapLocation,
                  size: 24,
                  color: backgroundDark,
                ),
              ),
            ),
          ),
          ResponsiveVisibility(
            visible: true,
            hiddenConditions: [
              Condition.smallerThan(
                  name: TABLET, value: blockWidthConstraints[1]),
            ],
            child: Padding(
              padding: const EdgeInsets.only(left: 8, right: 0),
              child: TextButton(
                onPressed: () => openUrl("tel:+919437082564"),
                style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all<Color>(primary),
                    overlayColor: MaterialStateProperty.resolveWith<Color>(
                      (Set<MaterialState> states) {
                        if (states.contains(MaterialState.hovered)) {
                          return buttonPrimaryDark;
                        }
                        if (states.contains(MaterialState.focused) ||
                            states.contains(MaterialState.pressed)) {
                          return buttonPrimaryDarkPressed;
                        }
                        return primary;
                      },
                    ),
                    // Shape sets the border radius from default 3 to 0.
                    shape: MaterialStateProperty.resolveWith<OutlinedBorder>(
                      (Set<MaterialState> states) {
                        if (states.contains(MaterialState.focused) ||
                            states.contains(MaterialState.pressed)) {
                          return const RoundedRectangleBorder(
                              borderRadius:
                                  BorderRadius.all(Radius.circular(0)));
                        }
                        return const RoundedRectangleBorder(
                            borderRadius: BorderRadius.all(Radius.circular(0)));
                      },
                    ),
                    padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
                        const EdgeInsets.symmetric(
                            vertical: 22, horizontal: 28)),
                    // Side adds pressed highlight outline.
                    side: MaterialStateProperty.resolveWith<BorderSide>(
                        (Set<MaterialState> states) {
                      if (states.contains(MaterialState.focused) ||
                          states.contains(MaterialState.pressed)) {
                        return const BorderSide(
                            width: 3, color: buttonPrimaryPressedOutline);
                      }
                      // Transparent border placeholder as Flutter does not allow
                      // negative margins.
                      return const BorderSide(width: 3, color: Colors.white);
                    })),
                child: Text(
                  "Contact Us",
                  style: buttonTextStyle.copyWith(
                      fontSize: 16, fontWeight: FontWeight.bold),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
