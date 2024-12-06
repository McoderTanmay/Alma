import 'dart:async';
import 'package:aludent/_utils/asset_constants.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class ImageData {
  String img;
  String text;
  ImageData({required this.img, required this.text});
}

class SignIn extends StatefulWidget {
  const SignIn({super.key});

  @override
  State<SignIn> createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  PageController controller = PageController();
  int page = 0;

  @override
  void initState() {
    Timer.periodic(const Duration(seconds: 3), (timer) {
      if (page < 4) {
        controller.animateToPage(page,
            duration: const Duration(milliseconds: 300),
            curve: Curves.easeInQuint);
        page++;
      } else {
        page = 0;
      }
    });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    List<ImageData> images = [
      ImageData(img: AssetConstants.forums, text: "Forums"),
      ImageData(img: AssetConstants.discussions, text: "Discuss"),
      ImageData(img: AssetConstants.connectPeople, text: "Connect"),
      ImageData(img: AssetConstants.aiAssist, text: "AI powered assist"),
    ];
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.fromLTRB(
            MediaQuery.of(context).size.width * 0.05,
            MediaQuery.of(context).size.height * 0.1,
            MediaQuery.of(context).size.width * 0.05,
            MediaQuery.of(context).size.height * 0.05),
        child: Container(
          height: double.infinity,
          width: double.infinity,
          color: Colors.white,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              RichText(
                  text: const TextSpan(children: [
                TextSpan(
                    text: "Alu",
                    style: TextStyle(
                        fontFamily: 'Poppins',
                        fontSize: 32,
                        color: Colors.black)),
                TextSpan(
                    text: "Dent",
                    style: TextStyle(
                        fontFamily: 'Poppins',
                        fontSize: 32,
                        color: Color(0xff96D1C7))),
              ])),
              const Column(
                children: [
                  SizedBox(
                    width: double.maxFinite,
                    child: Text(
                      "Welcome to the Alumni Student Interaction System",
                      textAlign: TextAlign.start,
                      style: TextStyle(
                          fontFamily: 'Poppins',
                          fontSize: 24,
                          color: Colors.black),
                    ),
                  ),
                  SizedBox(height: 10),
                  SizedBox(
                    width: double.maxFinite,
                    child: Text(
                      "-by Department of Technical Education Rajasthan",
                      textAlign: TextAlign.end,
                      style: TextStyle(
                          fontFamily: 'Poppins',
                          fontSize: 16,
                          color: Colors.black),
                    ),
                  ),
                ],
              ),
              Column(
                children: [
                  SizedBox(
                    height: MediaQuery.of(context).size.height*0.2,
                    width: double.maxFinite,
                    child: PageView.builder(
                        controller: controller,
                        itemCount: images.length,
                        itemBuilder: (context, index) {
                          return Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              SizedBox(
                                height: 100,
                                width: double.maxFinite,
                                child: Image.asset(
                                  images[index].img,
                                  fit: BoxFit.contain,)),
                              Text(images[index].text,
                                style: const TextStyle(
                                  color: Colors.black,
                                  fontSize: 15, 
                                ))],
                          );
                        }),
                  ),
                  const SizedBox(height: 10),
                  SmoothPageIndicator(
                    effect: const ScaleEffect(
                      dotHeight: 6,
                      dotWidth: 6,
                      dotColor: Color(0xffD9D9D9)
                    ),
                    controller: controller, 
                    count: images.length)
                ],
              ),
              Column(
                children: [
                  Container(
                    height: MediaQuery.of(context).size.height * 0.05,
                    width: MediaQuery.of(context).size.width * 0.4,
                    decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius:
                            const BorderRadius.all(Radius.circular(10)),
                        border: Border.all(
                            color: const Color(0xffC3E703), width: 1)),
                    child: const Center(
                      child: Text(
                        "Login",
                        style: TextStyle(
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            color: Color(0xffC3E703)),
                      ),
                    ),
                  ),
                  const SizedBox(height: 10),
                  Container(
                    height: MediaQuery.of(context).size.height * 0.05,
                    width: MediaQuery.of(context).size.width * 0.4,
                    decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius:
                            const BorderRadius.all(Radius.circular(10)),
                        border: Border.all(
                            color: const Color(0xff96D1C7), width: 1)),
                    child: const Center(
                      child: Text(
                        "Sign Up",
                        style: TextStyle(
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            color: Color(0xff96D1C7)),
                      ),
                    ),
                  ),
                ],
              ),
              SizedBox(
                width: double.maxFinite,
                child: RichText(
                    textAlign: TextAlign.center,
                    text: const TextSpan(children: [
                      TextSpan(
                          text: "By joining in you agree to Aludent's",
                          style: TextStyle(
                              fontFamily: 'Poppins',
                              fontSize: 12,
                              color: Colors.black)),
                      TextSpan(
                          text: "User Agreement",
                          style: TextStyle(
                              fontFamily: 'Poppins',
                              fontSize: 12,
                              color: Color(0xff4762FA))),
                      TextSpan(
                          text: ",",
                          style: TextStyle(
                              fontFamily: 'Poppins',
                              fontSize: 12,
                              color: Colors.black)),
                      TextSpan(
                          text: "Privacy Policy",
                          style: TextStyle(
                              fontFamily: 'Poppins',
                              fontSize: 12,
                              color: Color(0xff4762FA))),
                      TextSpan(
                          text: "and",
                          style: TextStyle(
                              fontFamily: 'Poppins',
                              fontSize: 12,
                              color: Colors.black)),
                      TextSpan(
                          text: "Cookie Policy",
                          style: TextStyle(
                              fontFamily: 'Poppins',
                              fontSize: 12,
                              color: Color(0xff4762FA))),
                    ])),
              )
            ],
          ),
        ),
      ),
    );
  }
}
