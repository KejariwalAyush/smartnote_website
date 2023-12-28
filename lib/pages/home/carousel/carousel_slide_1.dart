import 'package:flutter/material.dart';

import 'animation_slide_up_down_fade.dart';
import 'carousel_text.dart';
import 'model_carousel_item_animation.dart';

class CarouselSlide1 extends StatefulWidget {
  final int slideDuration;

  const CarouselSlide1({Key? key, required this.slideDuration})
      : super(key: key);

  @override
  // ignore: library_private_types_in_public_api
  _CarouselSlide1State createState() => _CarouselSlide1State();
}

class _CarouselSlide1State extends State<CarouselSlide1>
    with SingleTickerProviderStateMixin {
  late Animation<double> animation;
  late AnimationController animationController;

  List<SlideItemAnimationModel> slideItems = [
    SlideItemAnimationModel(
        id: "slide_1-bg",
        entryDuration: 800,
        exitDuration: 500,
        entry: 0,
        exit: 224),
    SlideItemAnimationModel(
        id: "slide_1-layer_1",
        entryDuration: 800,
        exitDuration: 500,
        entry: 14,
        exit: 231),
    SlideItemAnimationModel(
        id: "slide_1-layer_2",
        entryDuration: 800,
        exitDuration: 500,
        entry: 26,
        exit: 238),
    SlideItemAnimationModel(
        id: "slide_1-text",
        entryDuration: 800,
        exitDuration: 500,
        entry: 36,
        exit: 219),
  ];
  final slideItemOffset = const Offset(0, 60);

  @override
  void dispose() {
    animationController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    animationController = AnimationController(
        duration: Duration(milliseconds: widget.slideDuration), vsync: this);
    animation = Tween<double>(begin: 0, end: 252).animate(animationController)
      ..addListener(() {
        setState(() {
          slideItems = getSlideItemAnimationUpdate(animation.value, slideItems);
        });
      });
    animationController.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Positioned(
          left: 449,
          top: 50,
          width: 400,
          height: 600,
          child: WidgetSlideUpDownFadeAnimation(
            duration: getSlideItemAnimationDuration("slide_1-bg", slideItems),
            direction:
                getSlideItemAnimationVisibility("slide_1-bg", slideItems),
            offset: slideItemOffset,
            child: Image.asset("assets/images/slide_1-bg.jpg",
                fit: BoxFit.fitHeight),
          ),
        ),
        Positioned(
          left: 300,
          top: 76,
          width: 800,
          height: 520,
          child: WidgetSlideUpDownFadeAnimation(
            duration:
                getSlideItemAnimationDuration("slide_1-layer_1", slideItems),
            direction:
                getSlideItemAnimationVisibility("slide_1-layer_1", slideItems),
            offset: slideItemOffset,
            child: Image.asset("assets/images/slide_1-layer_1.png",
                fit: BoxFit.fill),
          ),
        ),
        // Positioned(
        //   left: 374,
        //   top: 148,
        //   width: 596,
        //   height: 368,
        //   child: WidgetSlideUpDownFadeAnimation(
        //     duration:
        //         getSlideItemAnimationDuration("slide_1-layer_2", slideItems),
        //     direction: getSlideItemAnimationVisibility(
        //         "slide_1-layer_2", slideItems),
        //     offset: slideItemOffset,
        //     child: Image.asset("assets/images/slide_1-layer_2.png",
        //         fit: BoxFit.fill),
        //   ),
        // ),
        // Positioned(
        //   left: 441,
        //   top: 37,
        //   width: 317,
        //   height: 565,
        //   child: Image.asset("assets/images/device_frame.png",
        //       fit: BoxFit.fitHeight),
        // ),
        Positioned(
          left: 0,
          right: 0,
          top: 0,
          child: Container(
            height: 640,
            alignment: Alignment.center,
            child: WidgetSlideUpDownFadeAnimation(
              duration:
                  getSlideItemAnimationDuration("slide_1-text", slideItems),
              direction:
                  getSlideItemAnimationVisibility("slide_1-text", slideItems),
              offset: slideItemOffset,
              child: slide1Text,
            ),
          ),
        ),
      ],
    );
  }
}
