import 'package:flutter/material.dart';

import 'components.dart';

const String fontFamily = "Comfortaa";

// Simple
const TextStyle headlineTextStyle = TextStyle(
    fontSize: 44,
    color: textPrimary,
    height: 1.2,
    fontFamily: fontFamily,
    fontWeight: FontWeight.bold);

const TextStyle headlineSecondaryTextStyle = TextStyle(
    fontSize: 28,
    color: textPrimary,
    height: 1.2,
    fontFamily: fontFamily,
    fontWeight: FontWeight.w300);

const TextStyle bodyTextStyle = TextStyle(
    fontSize: 16, color: textPrimary, height: 1.5, fontFamily: fontFamily);

TextStyle bodyLinkTextStyle = bodyTextStyle.copyWith(color: primary);

const TextStyle buttonTextStyle = TextStyle(
    fontSize: 18, color: Colors.white, height: 1, fontFamily: fontFamily);

// Carousel
const TextStyle carouselBlueTextStyle = TextStyle(
    fontSize: 100,
    color: Color.fromARGB(255, 0, 0, 0),
    fontFamily: fontFamily,
    shadows: [
      Shadow(
        color: Color(0xffFE8800),
        offset: Offset(2, 1.5),
        blurRadius: 10,
      )
    ]);

const TextStyle carouselWhiteTextStyle = TextStyle(
    fontSize: 100,
    color: Colors.white,
    fontFamily: fontFamily,
    shadows: [
      Shadow(
        color: Color(0xffFE8800),
        offset: Offset(2, 2),
        blurRadius: 10,
      )
    ]);
