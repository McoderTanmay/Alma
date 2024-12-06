import 'package:aludent/module/sign_in/view/sign_in_ui.dart';
import 'package:flutter/material.dart';
import 'package:get/get_navigation/get_navigation.dart';

class RoutesNames {
  static const String signIn = "/";
}

final pages = [
  GetPage(
    curve: Curves.easeInQuint,
    name: RoutesNames.signIn, 
    page: () => const SignIn()),
];
