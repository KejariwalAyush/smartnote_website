import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';
import 'package:flutter_website/utils/utils.dart';
import 'package:responsive_framework/responsive_framework.dart';

class Header extends StatelessWidget {
  const Header({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: border)),
      margin: blockMargin,
      padding: const EdgeInsets.all(40),
      child: Align(
        alignment: Alignment.center,
        child: Container(
          constraints: const BoxConstraints(maxWidth: 780),
          child: Column(
            children: [
              MouseRegion(
                cursor: SystemMouseCursors.click,
                child: GestureDetector(
                  onTap: () =>
                      Navigator.of(context).popUntil((route) => route.isFirst),
                  child: Image.asset("assets/home/logo.png",
                      height: 185, fit: BoxFit.contain),
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text("Made by ",
                      style: headlineSecondaryTextStyle.copyWith(fontSize: 24)),
                  Text("GPW Offset",
                      style: headlineSecondaryTextStyle.copyWith(
                          fontSize: 26,
                          fontWeight: FontWeight.w800,
                          color: Colors.red.shade800)),
                ],
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 32),
                child: RichText(
                  text: TextSpan(
                    children: [
                      const TextSpan(
                          text:
                              "Where Creativity Meets Quality. Dive into the world of ",
                          style: headlineSecondaryTextStyle),
                      TextSpan(
                          text: "exquisite notebooks",
                          style: headlineSecondaryTextStyle.copyWith(
                              color: Colors.deepOrange)),
                      const TextSpan(
                          text: ", ", style: headlineSecondaryTextStyle),
                      TextSpan(
                          text: "registers",
                          style: headlineSecondaryTextStyle.copyWith(
                              color: Colors.deepOrange)),
                      const TextSpan(
                          text: ", ", style: headlineSecondaryTextStyle),
                      TextSpan(
                          text: "files",
                          style: headlineSecondaryTextStyle.copyWith(
                              color: Colors.deepOrange)),
                      const TextSpan(
                          text: ", ", style: headlineSecondaryTextStyle),
                      TextSpan(
                          text: "diary",
                          style: headlineSecondaryTextStyle.copyWith(
                              color: Colors.deepOrange)),
                      const TextSpan(
                          text: ", and ", style: headlineSecondaryTextStyle),
                      TextSpan(
                          text: "magazines",
                          style: headlineSecondaryTextStyle.copyWith(
                              color: Colors.deepOrange)),
                      const TextSpan(
                          text:
                              ".\n\nExperts in Producing Answer Sheets, Question Papers, Report Cards, and a Wide Range of School Printing Solutions.",
                          style: headlineSecondaryTextStyle),
                      const TextSpan(
                          text:
                              "\nOur passion for paper, dedication to craftsmanship, and commitment to sustainability come together to deliver premium products that ignite your imagination.",
                          style: bodyTextStyle),
                    ],
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(bottom: 32),
                child: ResponsiveRowColumn(
                  layout: ResponsiveBreakpoints.of(context).smallerThan(DESKTOP)
                      ? ResponsiveRowColumnType.COLUMN
                      : ResponsiveRowColumnType.ROW,
                  rowMainAxisAlignment: MainAxisAlignment.center,
                  rowCrossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    ResponsiveRowColumnItem(
                      child: TextButton(
                        onPressed: () => openUrl("mailto:ganeshkej@gmail.com"),
                        style: ButtonStyle(
                            backgroundColor:
                                MaterialStateProperty.all<Color>(primary),
                            overlayColor:
                                MaterialStateProperty.resolveWith<Color>(
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
                            shape: MaterialStateProperty.resolveWith<
                                OutlinedBorder>(
                              (Set<MaterialState> states) {
                                if (states.contains(MaterialState.focused) ||
                                    states.contains(MaterialState.pressed)) {
                                  return const RoundedRectangleBorder(
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(0)));
                                }
                                return const RoundedRectangleBorder(
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(0)));
                              },
                            ),
                            padding:
                                MaterialStateProperty.all<EdgeInsetsGeometry>(
                                    const EdgeInsets.symmetric(
                                        vertical: 32, horizontal: 84)),
                            // Side adds pressed highlight outline.
                            side: MaterialStateProperty.resolveWith<BorderSide>(
                                (Set<MaterialState> states) {
                              if (states.contains(MaterialState.focused) ||
                                  states.contains(MaterialState.pressed)) {
                                return const BorderSide(
                                    width: 3,
                                    color: buttonPrimaryPressedOutline);
                              }
                              // Transparent border placeholder as Flutter does not allow
                              // negative margins.
                              return const BorderSide(
                                  width: 3, color: Colors.white);
                            })),
                        child: Text(
                          "Reach Us",
                          style: buttonTextStyle.copyWith(fontSize: 18),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
