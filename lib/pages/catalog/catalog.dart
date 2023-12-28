import 'package:flutter/material.dart';
import 'package:flutter_website/components/components.dart';
import 'package:flutter_website/pages/catalog/notebook_page.dart';

class Catalog extends StatelessWidget {
  const Catalog({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: background,
      extendBodyBehindAppBar: true,
      // appBar: PreferredSize(
      //     preferredSize: Size(double.infinity, 80), child: WebsiteMenuBar()),
      body: NotebookPage(),
    );
  }
}
