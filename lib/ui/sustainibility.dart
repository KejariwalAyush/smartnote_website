import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';
import 'package:responsive_framework/responsive_framework.dart';

class Sustainibility extends StatelessWidget {
  const Sustainibility({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
          color: background,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: border)),
      margin: blockMargin,
      padding: blockPadding(context),
      child: ResponsiveRowColumn(
        layout: ResponsiveBreakpoints.of(context).smallerThan(DESKTOP)
            ? ResponsiveRowColumnType.COLUMN
            : ResponsiveRowColumnType.ROW,
        rowCrossAxisAlignment: CrossAxisAlignment.start,
        rowMainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          ResponsiveRowColumnItem(
            rowFlex: 2,
            columnOrder: 2,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(25, 32, 25, 0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.only(bottom: 16),
                    child: buildMaterialIconCircle(
                        "assets/home/responsibility.png", 75),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(bottom: 32),
                    child: Text("Preserving Nature, One Page at a Time",
                        style: headlineTextStyle
                            .copyWith(color: Colors.white, shadows: [
                          const Shadow(
                            color: backgroundDark,
                            offset: Offset(1, 1),
                            blurRadius: 2,
                          )
                        ])),
                  ),
                  RichText(
                    text: const TextSpan(
                      style: bodyTextStyle,
                      children: [
                        TextSpan(
                            text:
                                "We're not just manufacturers; we're stewards of the environment. Our sustainable practices, eco-friendly materials, and responsible production processes reflect our commitment to preserving the planet. Choose us to make a green statement."),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),
          ResponsiveRowColumnItem(
            rowFlex: 3,
            columnOrder: 1,
            child: Container(
              constraints: const BoxConstraints(maxHeight: 600, maxWidth: 400),
              child: Image.asset(
                'assets/home/sustainiblity.jpeg',
                fit: BoxFit.cover,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
