import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';
import 'package:responsive_framework/responsive_framework.dart';

class Features extends StatelessWidget {
  const Features({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      // decoration: BoxDecoration(
      //     color: Colors.white,
      //     borderRadius: BorderRadius.circular(4),
      //     border: Border.all(color: border)),
      margin: blockMargin,
      child: ResponsiveRowColumn(
        layout: ResponsiveBreakpoints.of(context).smallerThan(DESKTOP)
            ? ResponsiveRowColumnType.COLUMN
            : ResponsiveRowColumnType.ROW,
        rowCrossAxisAlignment: CrossAxisAlignment.start,
        columnCrossAxisAlignment: CrossAxisAlignment.center,
        columnMainAxisSize: MainAxisSize.min,
        rowPadding: const EdgeInsets.symmetric(horizontal: 80, vertical: 80),
        columnPadding: const EdgeInsets.symmetric(horizontal: 25, vertical: 50),
        columnSpacing: 50,
        rowSpacing: 50,
        children: [
          ResponsiveRowColumnItem(
            rowFlex: 1,
            rowFit: FlexFit.tight,
            child: Column(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(bottom: 32),
                  child: buildMaterialIconCircle("assets/home/rupee.png", 75),
                ),
                const Padding(
                  padding: EdgeInsets.only(bottom: 16),
                  child: Text("Unbeatable Prices for Bulk Orders",
                      style: headlineSecondaryTextStyle,
                      textAlign: TextAlign.center),
                ),
                const Text(
                    "Enjoy substantial cost savings when you order our notebooks, diaries, and magazines in bulk. Our competitive wholesale pricing ensures that you get the best value for your investment, making it easier than ever to meet your organizational or promotional needs while staying within budget.",
                    style: bodyTextStyle,
                    textAlign: TextAlign.center),
              ],
            ),
          ),
          ResponsiveRowColumnItem(
            rowFlex: 1,
            rowFit: FlexFit.tight,
            child: Column(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(bottom: 32),
                  child: buildMaterialIconCircle("assets/home/brand.png", 75),
                ),
                const Padding(
                  padding: EdgeInsets.only(bottom: 16),
                  child: Text("Tailored Products to Reflect Your Brand",
                      style: headlineSecondaryTextStyle,
                      textAlign: TextAlign.center),
                ),
                const Text(
                    "Elevate your brand identity with our customization options. From logo embossing to personalized designs and branding, we offer a range of customization choices for your bulk orders. Make a lasting impression with products that showcase your unique style and message.",
                    style: bodyTextStyle,
                    textAlign: TextAlign.center),
              ],
            ),
          ),
          ResponsiveRowColumnItem(
            rowFlex: 1,
            rowFit: FlexFit.tight,
            child: Column(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(bottom: 32),
                  child:
                      buildMaterialIconCircle("assets/home/delivery.png", 75),
                ),
                const Padding(
                  padding: EdgeInsets.only(bottom: 16),
                  child: Text("Prompt Delivery for Large Orders",
                      style: headlineSecondaryTextStyle,
                      textAlign: TextAlign.center),
                ),
                RichText(
                  text: const TextSpan(
                    style: bodyTextStyle,
                    children: [
                      TextSpan(
                          text:
                              "Time is of the essence, and we understand the importance of meeting deadlines. Our efficient production processes and dedicated team ensure that your bulk orders are processed swiftly and delivered on time, no matter the order size. Trust us to keep your projects on schedule."),
                    ],
                  ),
                  textAlign: TextAlign.center,
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
