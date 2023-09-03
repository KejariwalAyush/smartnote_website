import 'package:flutter/material.dart';

Widget buildMaterialIconCircle(String imagePath, double size) {
  return SizedBox(
    width: size,
    height: size,
    child: Align(
      alignment: Alignment.center,
      child: Image.asset(
        imagePath,
        fit: BoxFit.contain,
        width: size,
        height: size,
      ),
    ),
  );
}
