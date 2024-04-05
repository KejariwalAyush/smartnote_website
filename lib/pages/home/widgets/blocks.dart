import 'package:carousel_slider/carousel_slider.dart';
import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';
import 'package:flutter_website/utils/utils.dart';
import 'package:responsive_framework/responsive_framework.dart';

class WhyUseSmartnote extends StatelessWidget {
  const WhyUseSmartnote({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var list = [
      "assets/notebooks/notebook1.png",
      "assets/notebooks/notebook2.png",
      "assets/notebooks/notebook3.png",
      "assets/notebooks/notebook4.png",
      "assets/notebooks/notebook5.png",
      "assets/notebooks/notebook6.png",
      "assets/notebooks/notebook7.png",
    ];
    list.shuffle();
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
          color: background,
          borderRadius: BorderRadius.circular(4),
          border: Border.all(color: border)),
      margin: blockMargin,
      padding: blockPadding(context),
      child: ResponsiveRowColumn(
        layout: ResponsiveBreakpoints.of(context).smallerThan(DESKTOP)
            ? ResponsiveRowColumnType.COLUMN
            : ResponsiveRowColumnType.ROW,
        rowCrossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const ResponsiveRowColumnItem(
            rowFlex: 5,
            columnOrder: 2,
            child: Padding(
              padding: EdgeInsets.fromLTRB(25, 24, 25, 0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Padding(
                    padding: EdgeInsets.only(bottom: 16),
                    child: SelectableText("25+ Years of Industry Excellence",
                        style: headlineTextStyle),
                  ),
                  SelectableText.rich(
                    TextSpan(
                      style: bodyTextStyle,
                      children: [
                        TextSpan(
                            text:
                                "When it comes to notebooks, diaries, and magazines, experience matters. With over two and a half decades of dedicated service in the industry, Smartnote has honed its craft to perfection. Our rich history is a testament to our commitment to quality, innovation, and customer satisfaction. Choosing us means partnering with a trusted name that understands your needs and delivers beyond expectations."),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),
          ResponsiveRowColumnItem(
            rowFlex: 7,
            columnOrder: 1,
            child: CarouselSlider(
              options: CarouselOptions(
                height: 400.0,
                autoPlayInterval: const Duration(seconds: 2),
                disableCenter: true,
                autoPlay: true,
                enableInfiniteScroll: true,
                enlargeCenterPage: true,
                pageSnapping: false,
                enlargeFactor: 2,
                aspectRatio: 10 / 16,
              ),
              items: list.map((i) {
                return Builder(
                  builder: (BuildContext context) {
                    return Container(
                      padding: const EdgeInsets.all(10),
                      child: Image.asset(
                        i,
                      ),
                    );
                  },
                );
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }
}

class CallToAction extends StatelessWidget {
  const CallToAction({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: blockMargin,
      padding: blockPadding(context),
      child: Align(
        alignment: Alignment.center,
        child: Container(
          constraints: const BoxConstraints(maxWidth: 800),
          child: Column(
            children: [
              const Padding(
                padding: EdgeInsets.only(bottom: 16),
                child: SelectableText(
                    "Ready to Transform Your Ideas into Reality?",
                    style: headlineTextStyle),
              ),
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: SelectableText(
                    "Don't wait any longer. Let's embark on a journey together to create outstanding notebooks, diaries, and magazines that leave a lasting impression. Contact our experts today for personalized consultations, quotes, and to explore our extensive customization options. Your vision is our inspiration, and we're here to bring it to life.",
                    style: bodyTextStyle.copyWith(fontSize: 16)),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 32),
                child: TextButton(
                  onPressed: () async {
                    await FirebaseAnalytics.instance.logAppOpen();
                    openUrl("https://wa.me/c/917077533883");
                  },
                  style: ButtonStyle(
                      backgroundColor:
                          MaterialStateProperty.all<Color>(primary),
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
                              borderRadius:
                                  BorderRadius.all(Radius.circular(0)));
                        },
                      ),
                      padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
                          const EdgeInsets.symmetric(
                              vertical: 32, horizontal: 90)),
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
                    "Make an Order",
                    style: buttonTextStyle.copyWith(fontSize: 18),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class FlutterNewsRow extends StatelessWidget {
  const FlutterNewsRow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: blockMargin,
      child: ResponsiveRowColumn(
        layout: ResponsiveBreakpoints.of(context).smallerThan(DESKTOP)
            ? ResponsiveRowColumnType.COLUMN
            : ResponsiveRowColumnType.ROW,
        rowCrossAxisAlignment: CrossAxisAlignment.start,
        rowSpacing: 25,
        columnSpacing: 32,
        children: const [
          ResponsiveRowColumnItem(
            rowFlex: 1,
            rowFit: FlexFit.tight,
            child: FlutterNewsCard(
              title: "Write Us a Message",
              imagePath: "assets/home/mail.png",
              ctaLinkUrl: "mailto:ganeshkej@gmail.com",
              subtitle: SelectableText.rich(
                  TextSpan(text: "Send us an email at ", children: [
                TextSpan(
                    text: "ganeshkej@gmail.com",
                    style: TextStyle(
                        color: backgroundDark, fontWeight: FontWeight.bold)),
                TextSpan(text: " for a prompt response from our team.\n\n\n")
              ])),
              ctaTitle: "Mail Us",
            ),
          ),
          ResponsiveRowColumnItem(
            rowFlex: 1,
            rowFit: FlexFit.tight,
            child: FlutterNewsCard(
              title: "Give Us a Call",
              imagePath: "assets/home/customer-service.png",
              ctaLinkUrl: "tel:9437082564",
              subtitle: SelectableText.rich(TextSpan(text: "Dial ", children: [
                TextSpan(
                    text: "+91 9437082564",
                    style: TextStyle(
                        color: backgroundDark, fontWeight: FontWeight.bold)),
                TextSpan(
                    text:
                        " to speak directly with our friendly and knowledgeable staff.\n\n\n")
              ])),
              ctaTitle: "Call Us",
            ),
          ),
          ResponsiveRowColumnItem(
            rowFlex: 1,
            rowFit: FlexFit.tight,
            child: FlutterNewsCard(
              title: "Visit Our Location",
              imagePath: "assets/home/map.png",
              ctaLinkUrl: "https://goo.gl/maps/Q3Kx8KAHHd1LvMyV9",
              subtitle: SelectableText.rich(TextSpan(
                  text:
                      "If you prefer face-to-face interaction, we invite you to visit our store at ",
                  children: [
                    TextSpan(
                        text:
                            "KK-27, Civil Township, Rourkela, Odisha - 769004.\n",
                        style: TextStyle(
                            color: backgroundDark,
                            fontWeight: FontWeight.bold)),
                    // TextSpan(
                    //     text:
                    //         " Our doors are open, and we'd love to welcome you.\n")
                  ])),
              ctaTitle: "Visit Us",
            ),
          ),
        ],
      ),
    );
  }
}

class FlutterNewsCard extends StatelessWidget {
  final String title;
  final Widget subtitle;
  final String imagePath;
  final String ctaLinkUrl;
  final String ctaTitle;

  const FlutterNewsCard(
      {Key? key,
      required this.title,
      required this.subtitle,
      required this.imagePath,
      required this.ctaTitle,
      required this.ctaLinkUrl})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          // color: Colors.white,
          borderRadius: BorderRadius.circular(4),
          border: Border.all(color: border)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(top: 16.0),
            child: Center(child: buildMaterialIconCircle(imagePath, 75)),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(40, 40, 40, 40),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: Text("Get In Touch",
                      style: bodyTextStyle.copyWith(
                          fontSize: 12, color: const Color(0xFF6C757D))),
                ),
                subtitle,
                Padding(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: Text(title, style: headlineSecondaryTextStyle),
                ),
                TextButton(
                  onPressed: () async {
                    await FirebaseAnalytics.instance
                        .logUnlockAchievement(id: ctaTitle);
                    openUrl(ctaLinkUrl);
                  },
                  style: ButtonStyle(
                      backgroundColor:
                          MaterialStateProperty.all<Color>(primary),
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
                              borderRadius:
                                  BorderRadius.all(Radius.circular(0)));
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
                    ctaTitle,
                    style: buttonTextStyle.copyWith(
                        fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
