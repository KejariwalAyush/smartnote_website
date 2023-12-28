import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';
import 'package:flutter_website/utils/utils.dart';
import 'package:motion/motion.dart';
import 'package:responsive_framework/responsive_framework.dart';

class Personalization extends StatelessWidget {
  const Personalization({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
          color: backgroundDark,
          borderRadius: BorderRadius.circular(4),
          border: Border.all(color: border)),
      margin: blockMargin,
      padding: blockPadding(context),
      child: ResponsiveRowColumn(
        layout: ResponsiveBreakpoints.of(context).smallerThan(DESKTOP)
            ? ResponsiveRowColumnType.COLUMN
            : ResponsiveRowColumnType.ROW,
        rowCrossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ResponsiveRowColumnItem(
            rowFlex: 2,
            child: Motion(
              key: const Key('assets/home/personalization.jpeg'),
              child: Container(
                constraints: const BoxConstraints(maxHeight: 600),
                child: Image.asset(
                  'assets/home/personalization.jpeg',
                ),
              ),
            ),
          ),
          ResponsiveRowColumnItem(
            rowFlex: 1,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(25, 32, 25, 0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.only(bottom: 16),
                    child:
                        buildMaterialIconCircle("assets/home/computer.png", 75),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(bottom: 32),
                    child: SelectableText("Your Vision, Our Canvas",
                        style: headlineTextStyle.copyWith(color: Colors.white)),
                  ),
                  SelectableText.rich(
                    TextSpan(
                      style: bodyTextStyle,
                      children: [
                        const TextSpan(
                            text:
                                "Your brand deserves to stand out. With our extensive customization options, we empower you to express your unique identity. Whether it's corporate branding or personalized gifts, we turn your vision into reality."),
                        const TextSpan(text: "\n\n"),
                        TextSpan(
                            recognizer: TapGestureRecognizer()
                              ..onTap = () {
                                openUrl(
                                    "https://dribbble.com/shots/2940231-Google-Newsstand-Navigation-Pattern");
                              },
                            text: "Contact us to personalize your order",
                            style: bodyTextStyle.copyWith(
                                fontSize: 12, color: primary)),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
