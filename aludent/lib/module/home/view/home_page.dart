import 'package:aludent/_utils/asset_constants.dart';
import 'package:aludent/_utils/routes.dart';
import 'package:aludent/module/home/view/home_page_drawer.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.white,
        title: RichText(
            text: const TextSpan(children: [
          TextSpan(
              text: "Alu",
              style: TextStyle(
                  fontFamily: 'Poppins', fontSize: 32, color: Colors.black)),
          TextSpan(
              text: "Dent",
              style: TextStyle(
                  fontFamily: 'Poppins',
                  fontSize: 32,
                  color: Color(0xff96D1C7))),
        ])),
        actions: [
          IconButton(
              onPressed: () {
                Get.toNamed(RoutesNames.messages);
              },
              icon: const Icon(Icons.message, size: 25)),
        ],
      ),
      drawer: const HomePageDrawer(),
      body: Container(
        padding: const EdgeInsets.all(10),
        height: double.maxFinite,
        width: double.maxFinite,
        child: Column(
          children: [
            Expanded(
              child: ListView(
                children: [
                  Post(
                      username: "Jane Dow",
                      profilePictureUrl: AssetConstants.profile,
                      image: AssetConstants.image,
                      contentText:
                          "lorem ipsum anfdjasjdi aDJKHFAHF hoahrf hasihfaf oahfoihadfjaDUIFh ailfh oadhf oadhfo adoifk adshfop hadoif hoai lorem ipsum anfdjasjdi aDJKHFAHF hoahrf hasihfaf oahfoihadfjaDUIFh ailfh oadhf oadhfo adoifk adshfop hadoif hoai"),
                  Post(
                      username: "Jane Dow",
                      profilePictureUrl: AssetConstants.profile,
                      contentText:
                          "lorem ipsum anfdjasjdi aDJKHFAHF hoahrf hasihfaf oahfoihadfjaDUIFh ailfh oadhf oadhfo adoifk adshfop hadoif hoai lorem ipsum anfdjasjdi aDJKHFAHF hoahrf hasihfaf oahfoihadfjaDUIFh ailfh oadhf oadhfo adoifk adshfop hadoif hoai"),
                  Post(
                      username: "Jane Dow",
                      profilePictureUrl: AssetConstants.profile,
                      image: AssetConstants.discussions,
                      contentText:
                          "lorem ipsum anfdjasjdi aDJKHFAHF hoahrf hasihfaf oahfoihadfjaDUIFh ailfh oadhf oadhfo adoifk adshfop hadoif hoai lorem ipsum anfdjasjdi aDJKHFAHF hoahrf hasihfaf oahfoihadfjaDUIFh ailfh oadhf oadhfo adoifk adshfop hadoif hoai"),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(10, 0, 10, 0),
              child: SizedBox(
                height: 50,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    FooterIcon(
                      image: AssetConstants.home,
                      onTap: () => () {},
                    ),
                    FooterIcon(
                      image: AssetConstants.discussion,
                      onTap: () => () {},
                    ),
                    FooterIcon(
                      image: AssetConstants.create,
                      onTap: () => () {},
                    ),
                    FooterIcon(
                      image: AssetConstants.conference,
                      onTap: () => () {},
                    ),
                    FooterIcon(
                      image: AssetConstants.profile,
                      onTap: () {},
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
      floatingActionButton: Padding(
        padding: const EdgeInsets.fromLTRB(0, 0, 20, 75),
        child: InkWell(
          child: Container(
            height: 50,
            width: 50,
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                color: const Color(0xffC3E703)),
            child: Center(
              child: Image(image: AssetImage(AssetConstants.magicWand)),
            ),
          ),
        ),
      ),
    );
  }
}

class Post extends StatelessWidget {
  final String username;
  final String profilePictureUrl;
  final String contentText;
  final String image;

  const Post({
    super.key,
    required this.username,
    required this.profilePictureUrl,
    required this.contentText,
    this.image = "",
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(10),
              boxShadow: const [
                BoxShadow(blurRadius: 12, color: Color(0x22000000))
              ]),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  CircleAvatar(
                    backgroundImage: AssetImage(profilePictureUrl),
                    radius: 20,
                  ),
                  const SizedBox(width: 10),
                  SizedBox(
                    height: 50,
                    width: 150,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          username,
                          style: const TextStyle(fontWeight: FontWeight.bold),
                        ),
                        const Text(
                          "lorem epsum set vel lol dicor non mi amor",
                          maxLines: 1,
                          style: TextStyle(fontSize: 10),
                          overflow: TextOverflow.ellipsis,
                        ),
                        const Text(
                          "• 5h",
                          style:
                              TextStyle(fontSize: 10, color: Color(0x88000000)),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                contentText,
                maxLines: image != "" ? 2 : 5,
                style: const TextStyle(fontSize: 12),
                overflow: TextOverflow.ellipsis,
              ),
              image != ""
                  ? SizedBox(
                      height: MediaQuery.of(context).size.height * 0.3,
                      child:
                          Image(image: AssetImage(image), fit: BoxFit.contain),
                    )
                  : const SizedBox(height: 1),
              const Divider(),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  InteractionButton(
                      imageAsset: AssetConstants.like, content: "Like"),
                  InteractionButton(
                      imageAsset: AssetConstants.comment, content: "Comment"),
                  InteractionButton(
                      imageAsset: AssetConstants.upload, content: "SHare"),
                ],
              ),
            ],
          ),
        ),
        const SizedBox(height: 10)
      ],
    );
  }
}

class InteractionButton extends StatelessWidget {
  final String imageAsset;
  final String content;
  const InteractionButton(
      {super.key, required this.imageAsset, required this.content});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 80,
      child: Row(
        children: [
          Image(
            image: AssetImage(imageAsset),
            height: 15,
            width: 15,
          ),
          const SizedBox(width: 10),
          Text(
            content,
            style: const TextStyle(fontSize: 12, color: Colors.black),
          )
        ],
      ),
    );
  }
}

class FooterIcon extends StatelessWidget {
  final String image;
  final void Function() onTap;
  const FooterIcon({super.key, required this.image, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () => onTap,
      child: Image(height: 25, width: 25, image: AssetImage(image)),
    );
  }
}
