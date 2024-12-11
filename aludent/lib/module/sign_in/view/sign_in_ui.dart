import 'dart:async';
import 'package:aludent/_utils/asset_constants.dart';
import 'package:aludent/_utils/common_components.dart';
import 'package:aludent/_utils/routes.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
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
  final TextEditingController enrollmentController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController passwordController2 = TextEditingController();
  bool isVisible = false;

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

  void showLoginDialog(BuildContext context) {
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            surfaceTintColor: const Color(0xffD9D9D9),
            content: SizedBox(
              height: MediaQuery.of(context).size.height * 0.3,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Enrollment Number Input
                  TextField(
                    controller: enrollmentController,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius:
                                BorderRadius.all(Radius.circular(12))),
                        filled: true,
                        fillColor: Colors.white,
                        hintText: 'Enrollment Number',
                        hintStyle:
                            TextStyle(fontSize: 12, color: Color(0xffD9D9D9))),
                  ),
                  TextField(
                    controller: passwordController,
                    obscureText: true,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius:
                                BorderRadius.all(Radius.circular(12))),
                        filled: true,
                        fillColor: Colors.white,
                        hintText: 'Password',
                        hintStyle:
                            TextStyle(fontSize: 12, color: Color(0xffD9D9D9))),
                  ), // Spacing before login button
                  // Login Button
                  Center(
                    child: InkWell(
                      onTap: () {
                        // Handle login action
                        String enrollment = enrollmentController.text;
                        String password = passwordController.text;
                        'Enrollment: $enrollment, Password: $password'.logIt;
                        Get.toNamed(RoutesNames.home);
                      },
                      child: Container(
                        height: 35,
                        width: MediaQuery.of(context).size.width * 0.3,
                        decoration: const BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(12)),
                          color: Color(0xff96D1C7),
                        ),
                        child: const Center(
                          child: Text(
                            "Login",
                            style: TextStyle(fontSize: 12, color: Colors.black),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        });
  }

  void showSignUpDialog(BuildContext context) {
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            surfaceTintColor: const Color(0xffD9D9D9),
            content: SizedBox(
              height: MediaQuery.of(context).size.height * 0.5,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  TextField(
                    controller: enrollmentController,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius:
                                BorderRadius.all(Radius.circular(12))),
                        filled: true,
                        fillColor: Colors.white,
                        hintText: 'Enrollment Number',
                        hintStyle:
                            TextStyle(fontSize: 12, color: Color(0xffD9D9D9))),
                  ),
                  TextField(
                    controller: emailController,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius:
                                BorderRadius.all(Radius.circular(12))),
                        filled: true,
                        fillColor: Colors.white,
                        hintText: 'Email',
                        hintStyle:
                            TextStyle(fontSize: 12, color: Color(0xffD9D9D9))),
                  ),
                  TextField(
                    controller: passwordController,
                    obscureText: true,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius:
                                BorderRadius.all(Radius.circular(12))),
                        filled: true,
                        fillColor: Colors.white,
                        hintText: 'Password',
                        hintStyle:
                            TextStyle(fontSize: 12, color: Color(0xffD9D9D9))),
                  ),
                  TextField(
                    controller: passwordController2,
                    obscureText: true,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius:
                                BorderRadius.all(Radius.circular(12))),
                        filled: true,
                        fillColor: Colors.white,
                        hintText: 'Confirm Password',
                        hintStyle:
                            TextStyle(fontSize: 12, color: Color(0xffD9D9D9))),
                  ),
                  Center(
                    child: InkWell(
                      onTap: () {
                        String enrollment = enrollmentController.text;
                        String password = passwordController.text;
                        'Enrollment: $enrollment, Password: $password'.logIt;
                      },
                      child: Container(
                        height: 35,
                        width: MediaQuery.of(context).size.width * 0.3,
                        decoration: const BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(12)),
                          color: Color(0xff96D1C7),
                        ),
                        child: const Center(
                          child: Text(
                            "Sign In",
                            style: TextStyle(fontSize: 12, color: Colors.black),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    List<ImageData> images = [
      ImageData(img: AssetConstants.forums, text: "Forums"),
      ImageData(img: AssetConstants.discussions, text: "Discuss"),
      ImageData(img: AssetConstants.connectPeople, text: "Connect"),
      ImageData(img: AssetConstants.aiAssist, text: "AI powered Assist"),
    ];

    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Container(
        height: double.infinity,
        width: double.infinity,
        padding: EdgeInsets.fromLTRB(
            MediaQuery.of(context).size.width * 0.07,
            MediaQuery.of(context).size.height * 0.1,
            MediaQuery.of(context).size.width * 0.07,
            MediaQuery.of(context).size.height * 0.05),
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
                SizedBox(height: 20),
                SizedBox(
                  width: double.maxFinite,
                  child: Text(
                    "-by Department of Technical \nEducation, Rajasthan",
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
                  height: MediaQuery.of(context).size.height * 0.2,
                  width: double.maxFinite,
                  child: PageView.builder(
                      controller: controller,
                      itemCount: images.length,
                      itemBuilder: (context, index) {
                        return Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SizedBox(
                                height: 125,
                                width: double.maxFinite,
                                child: Image.asset(
                                  images[index].img,
                                  fit: BoxFit.contain,
                                )),
                            Text(images[index].text,
                                style: const TextStyle(
                                  color: Colors.black,
                                  fontSize: 15,
                                ))
                          ],
                        );
                      }),
                ),
                const SizedBox(height: 10),
                SmoothPageIndicator(
                    effect: const ScaleEffect(
                        dotHeight: 6, dotWidth: 6, dotColor: Color(0xffD9D9D9)),
                    controller: controller,
                    count: images.length)
              ],
            ),
            Column(
              children: [
                InkWell(
                  onTap: () => showLoginDialog(context),
                  child: Container(
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
                ),
                const SizedBox(height: 10),
                InkWell(
                  onTap: () => showSignUpDialog(context),
                  child: Container(
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
                ),
              ],
            ),
            SizedBox(
              width: double.maxFinite,
              child: RichText(
                  textAlign: TextAlign.center,
                  text: const TextSpan(children: [
                    TextSpan(
                        text: "By joining in you agree to Aludent's ",
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
                        text: ", ",
                        style: TextStyle(
                            fontFamily: 'Poppins',
                            fontSize: 12,
                            color: Colors.black)),
                    TextSpan(
                        text: "Privacy Policy ",
                        style: TextStyle(
                            fontFamily: 'Poppins',
                            fontSize: 12,
                            color: Color(0xff4762FA))),
                    TextSpan(
                        text: "and ",
                        style: TextStyle(
                            fontFamily: 'Poppins',
                            fontSize: 12,
                            color: Colors.black)),
                    TextSpan(
                        text: "Cookie Policy ",
                        style: TextStyle(
                            fontFamily: 'Poppins',
                            fontSize: 12,
                            color: Color(0xff4762FA))),
                  ])),
            )
          ],
        ),
      ),
    );
  }
}
