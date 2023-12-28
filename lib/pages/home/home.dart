import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'widgets/widgets.dart';
import 'carousel/carousel.dart';

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

class Home extends StatelessWidget {
  const Home({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: background,
      extendBodyBehindAppBar: true,
      appBar: const PreferredSize(
          preferredSize: Size(double.infinity, 80), child: WebsiteMenuBar()),
      body: ListView.builder(
          itemCount: blocks.length,
          itemBuilder: (context, index) {
            return blocks[index];
          }),
    );
  }
}
