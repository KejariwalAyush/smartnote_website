import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';
import 'package:responsive_framework/responsive_framework.dart';

class Perfection extends StatelessWidget {
  const Perfection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
          color: backgroundDark,
          borderRadius: BorderRadius.circular(8),
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
              rowFlex: 3,
              child: Container(
                constraints: const BoxConstraints(maxHeight: 600),
                child: Image.asset(
                  'assets/home/perfection.jpeg',
                ),
              )),
          ResponsiveRowColumnItem(
            rowFlex: 2,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(25, 32, 25, 0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.only(bottom: 16),
                    child: buildMaterialIconCircle(
                        "assets/home/perfect-skin.png", 75),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(bottom: 32),
                    child: Text("Our Commitment to Perfection",
                        style: headlineTextStyle.copyWith(
                          color: Colors.white,
                        )),
                  ),
                  RichText(
                    text: TextSpan(
                      style: bodyTextStyle,
                      children: [
                        const TextSpan(text: "At "),
                        TextSpan(
                            text: "Smartnote",
                            style: bodyTextStyle.copyWith(
                                fontStyle: FontStyle.italic)),
                        const TextSpan(
                            text:
                                " our dedication to craftsmanship and unwavering commitment to quality set us apart. We meticulously handcraft each notebook, diary, and magazine, ensuring every product exudes excellence. Quality isn't just a standard; it's our heritage."),
                        // const TextSpan(text: "\n\n"),
                        // TextSpan(
                        //     recognizer: TapGestureRecognizer()
                        //       ..onTap = () {
                        //         openUrl(
                        //             "https://flutter.dev/docs/development/tools/hot-reload");
                        //       },
                        //     text: "Learn more",
                        //     style: bodyLinkTextStyle)
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
