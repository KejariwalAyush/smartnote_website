import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';

RichText slide1Text = RichText(
  text: const TextSpan(
    children: <TextSpan>[
      TextSpan(text: 'Premium', style: carouselBlueTextStyle),
      TextSpan(text: ' Quality ', style: carouselWhiteTextStyle)
    ],
  ),
  textAlign: TextAlign.center,
);

RichText slide2Text = RichText(
  text: const TextSpan(
    children: <TextSpan>[
      TextSpan(text: 'Customize', style: carouselWhiteTextStyle),
      TextSpan(text: ' according to ', style: carouselBlueTextStyle),
      TextSpan(text: 'your needs', style: carouselBlueTextStyle),
    ],
  ),
  textAlign: TextAlign.center,
);

RichText slide3Text = RichText(
  text: const TextSpan(
    children: <TextSpan>[
      TextSpan(text: 'On', style: carouselBlueTextStyle),
      TextSpan(text: ' Time ', style: carouselWhiteTextStyle),
      TextSpan(text: 'delivery', style: carouselBlueTextStyle)
    ],
  ),
  textAlign: TextAlign.center,
);

RichText slide4Text = RichText(
  text: const TextSpan(
    children: <TextSpan>[
      TextSpan(text: 'In', style: carouselBlueTextStyle),
      TextSpan(text: ' most affordable ', style: carouselWhiteTextStyle),
      TextSpan(text: 'rates', style: carouselBlueTextStyle)
    ],
    style: TextStyle(height: 1.1),
  ),
  textAlign: TextAlign.center,
);
