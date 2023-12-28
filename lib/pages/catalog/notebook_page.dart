import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_website/components/components.dart';
import 'package:flutter_website/utils/page_flip/page_flip.dart';

class NotebookPage extends StatefulWidget {
  @override
  _NotebookPageState createState() => _NotebookPageState();
}

class _NotebookPageState extends State<NotebookPage> {
  final PageController _pageController1 = PageController(viewportFraction: 1);
  List<String> pageImages = [
    'assets/notebooks/notebook1.png',
    'assets/notebooks/notebook2.png',
    'assets/notebooks/notebook3.png',
    'assets/notebooks/notebook4.png',
    // 'assets/notebooks/notebook5.png',
  ];

  @override
  void dispose() {
    _pageController1.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: background,
      body: Row(
        children: [
          Expanded(
            flex: 1,
            child: PageFlipWidget(
              backgroundColor: background,
              children: [
                for (int i = 0; i < pageImages.length; i += 2)
                  ImageWidget(context, i, alignleft: false),
              ],
            ),
          ),
          Expanded(
            flex: 1,
            child: PageFlipWidget(
              backgroundColor: background,
              children: [
                for (int i = 1; i < pageImages.length; i += 2)
                  ImageWidget(context, i, alignleft: true),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget BookPageWidgetList(context, index) {
    final leftPageIndex = index * 2;
    final rightPageIndex = index * 2 + 1;
    return Row(
      children: [
        ImageWidget(context, leftPageIndex),
        // Right Page
        ImageWidget(context, rightPageIndex, alignleft: true)
      ],
    );
  }

  Widget ImageWidget(context, index, {bool alignleft = false}) {
    return Container(
      alignment: alignleft ? Alignment.centerLeft : Alignment.centerRight,
      height: MediaQuery.of(context).size.height,
      child: Image.asset(
        pageImages[index],
        fit: BoxFit.contain,
      ),
    );
  }
}

class NewWidget extends StatelessWidget {
  const NewWidget({
    super.key,
    required PageController pageController1,
    required this.pageImages,
  }) : _pageController1 = pageController1;

  final PageController _pageController1;
  final List<String> pageImages;

  @override
  Widget build(BuildContext context) {
    return PageView.builder(
      controller: _pageController1,
      itemCount: (pageImages.length + 1) ~/ 2,
      physics: ClampingScrollPhysics(),
      scrollDirection: Axis.vertical,
      pageSnapping: true,
      itemBuilder: BookPageWidgetList,
    );
  }

  Widget? BookPageWidgetList(context, index) {
    final leftPageIndex = index * 2;
    final rightPageIndex = index * 2 + 1;
    return Row(
      children: [
        Expanded(
          flex: 1,
          child: Container(
            alignment: Alignment.centerRight,
            height: MediaQuery.of(context).size.height,
            child: Image.asset(
              pageImages[leftPageIndex],
              fit: BoxFit.contain,
            ),
          ),
        ),
        // Right Page
        Expanded(
          flex: 1,
          child: Container(
            alignment: Alignment.centerLeft,
            height: MediaQuery.of(context).size.height,
            child: Image.asset(
              pageImages[rightPageIndex],
              fit: BoxFit.contain,
            ),
          ),
        ),
      ],
    );
  }
}
