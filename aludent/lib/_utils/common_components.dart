import 'package:flutter/foundation.dart';

extension StringExtension on String {

  //User this logIt function print the output
  void get logIt {
    if (kDebugMode) {
      print(this);
    }
  }
}