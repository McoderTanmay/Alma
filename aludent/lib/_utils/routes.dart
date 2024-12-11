import 'package:aludent/module/home/view/home_page.dart';
import 'package:aludent/module/message/view/messages.dart';
import 'package:aludent/module/profile/view/profile_page.dart';
import 'package:aludent/module/sign_in/view/sign_in_ui.dart';
import 'package:flutter/material.dart';
import 'package:get/get_navigation/get_navigation.dart';

class RoutesNames {
  static const String signIn = "/";
  static const String home = "/home";
  static const String messages = "/messages";
  static const String profile = "/profile";
}

final pages = [
  GetPage(
      curve: Curves.easeInQuint,
      name: RoutesNames.signIn,
      page: () => const SignIn()),
  GetPage(
      curve: Curves.easeInQuint,
      name: RoutesNames.home,
      page: () => const HomePage()),
  GetPage(
      curve: Curves.easeInQuint,
      name: RoutesNames.messages,
      page: () => const MessageScreen()),
  GetPage(
      curve: Curves.easeInQuint,
      name: RoutesNames.profile,
      page: () => const ProfilePage())
];
