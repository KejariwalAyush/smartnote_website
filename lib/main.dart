import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_website/firebase_options.dart';
import 'package:flutter_website/ui/block_wrapper.dart';
import 'package:flutter_website/ui/carousel/carousel.dart';
import 'package:flutter_website/ui/features.dart';
import 'package:flutter_website/ui/footer.dart';
import 'package:flutter_website/ui/header.dart';
import 'package:flutter_website/ui/menu_bar.dart';
import 'package:flutter_website/ui/perfection.dart';
import 'package:flutter_website/ui/personalization.dart';
import 'package:flutter_website/ui/sustainibility.dart';
import 'package:responsive_framework/responsive_framework.dart';

import 'components/components.dart';
import 'ui/blocks.dart';

void main() async {
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    FirebaseAnalytics analytics = FirebaseAnalytics.instance;
    return MaterialApp(
      // Wrapping the app with a builder method makes breakpoints
      // accessible throughout the widget tree.
      builder: (context, child) => ResponsiveBreakpoints.builder(
        child: child!,
        breakpoints: [
          const Breakpoint(start: 0, end: 450, name: MOBILE),
          const Breakpoint(start: 451, end: 800, name: TABLET),
          const Breakpoint(start: 801, end: 1920, name: DESKTOP),
          const Breakpoint(start: 1921, end: double.infinity, name: '4K'),
        ],
      ),

      home: Scaffold(
        backgroundColor: background,
        appBar: const PreferredSize(
            preferredSize: Size(double.infinity, 80), child: WebsiteMenuBar()),
        body: ListView.builder(
            itemCount: blocks.length,
            itemBuilder: (context, index) {
              return blocks[index];
            }),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}

List<Widget> blocks = [
  ResponsiveVisibility(
      visible: true,
      hiddenConditions: [
        Condition.smallerThan(name: DESKTOP, value: blockWidthConstraints[1])
      ],
      child: RepaintBoundary(
          child: SizedBox(width: 1200, height: 700, child: Carousel()))),
  ResponsiveVisibility(
      visible: false,
      visibleConditions: [
        Condition.equals(name: TABLET, value: blockWidthConstraints[1])
      ],
      child: Image.asset("assets/images/slide_3-bg.png")),
  ResponsiveVisibility(
      visible: false,
      visibleConditions: [
        Condition.equals(name: MOBILE, value: blockWidthConstraints[0])
      ],
      child: Image.asset("assets/home/mobile_home.png")),
  const BlockWrapper(Header()),
  const BlockWrapper(Features()),
  const BlockWrapper(Perfection()),
  const BlockWrapper(Sustainibility()),
  const BlockWrapper(Personalization()),
  const BlockWrapper(WhyUseSmartnote()),
  const BlockWrapper(CallToAction()),
  const BlockWrapper(FlutterNewsRow()),
  const Footer(),
];

// Disabled codelab block for performance.
//              ResponsiveVisibility(
//                hiddenWhen: [Condition.smallerThan(name: DESKTOP)],
//                child: ResponsiveConstraints(
//                    constraintsWhen: blockWidthConstraints,
//                    child: FlutterCodelab()),
//              ),
