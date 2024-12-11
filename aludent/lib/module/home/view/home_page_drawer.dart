import 'package:aludent/_utils/asset_constants.dart';
import 'package:aludent/_utils/routes.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HomePageDrawer extends StatelessWidget {
  const HomePageDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: Colors.white,
      child: Container(
        padding: const EdgeInsets.all(10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 70),
            InkWell(
              onTap: () {
                Get.toNamed(RoutesNames.profile);
              },
              child: Container(
                height: MediaQuery.of(context).size.height * 0.12,
                padding: const EdgeInsets.all(10),
                child: Row(
                  children: [
                    Image(
                        image: AssetImage(AssetConstants.profile),
                        height: 70,
                        width: 70),
                    Container(
                      padding: const EdgeInsets.all(10),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            "Jane Doe",
                            style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                                color: Colors.black),
                          ),
                          SizedBox(
                            width: MediaQuery.of(context).size.width * 0.4,
                            child: const Text(
                              "Lore madufa adhauf ff anjdhas oiaflk aofuob af auofhafoaf afba ubfjaf f oafo",
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style:
                                  TextStyle(fontSize: 12, color: Colors.black),
                            ),
                          ),
                          const Text(
                            "Guru Ghasidas University, Bilaspur",
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                                fontSize: 10, color: Color(0x88000000)),
                          )
                        ],
                      ),
                    )
                  ],
                ),
              ),
            ),
            const Divider(color: Color(0x22000000)),
            Padding(
                padding: const EdgeInsets.fromLTRB(10, 10, 0, 0),
                child: InkWell(
                  child: SizedBox(
                    width: MediaQuery.of(context).size.width * 0.4,
                    child: const Row(
                      children: [
                        Icon(Icons.search, size: 25),
                        SizedBox(width: 10),
                        Text("Search People",
                            style: TextStyle(fontSize: 14, color: Colors.black))
                      ],
                    ),
                  ),
                )),
            DrawerButton(icon: AssetConstants.discussion, title: "Discussion"),
            DrawerButton(icon: AssetConstants.conference, title: "Conferences"),
            DrawerButton(icon: AssetConstants.people, title: "Connections"),
            DrawerButton(icon: AssetConstants.setting, title: "Settings"),
            const Expanded(child: SizedBox()),
            const Divider(color: Color(0x22000000)),
            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                LinkText(title: "About"),
                LinkText(title: "Accessibility"),
              ],
            ),
            const SizedBox(height: 10),
            const Center(child: LinkText(title: "Privacy & Policy")),
            const SizedBox(height: 10),
            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                LinkText(title: "Help Center"),
                LinkText(title: "Go to Web"),
              ],
            ),
            SizedBox(height: MediaQuery.of(context).size.height * 0.05),
          ],
        ),
      ),
    );
  }
}

class LinkText extends StatelessWidget {
  final String title;
  const LinkText({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(5),
      child: Text(
        "• $title",
        style: const TextStyle(fontSize: 12, color: Colors.black),
      ),
    );
  }
}

class DrawerButton extends StatelessWidget {
  final String icon;
  final String title;
  const DrawerButton({super.key, required this.icon, required this.title});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(10, 10, 0, 0),
      child: InkWell(
        child: SizedBox(
          width: MediaQuery.of(context).size.width * 0.4,
          child: Row(
            children: [
              Image(
                height: 25,
                width: 25,
                image: AssetImage(icon),
              ),
              const SizedBox(width: 10),
              Text(
                title,
                style: const TextStyle(fontSize: 14, color: Colors.black),
              )
            ],
          ),
        ),
      ),
    );
  }
}
