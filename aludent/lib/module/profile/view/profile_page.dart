import 'package:aludent/_utils/asset_constants.dart';
import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
            onPressed: () {
              Navigator.pop(context);
            },
            icon: const Icon(Icons.arrow_back)),
        actions: [
          InkWell(
            child: Padding(
              padding: const EdgeInsets.all(15.0),
              child: Image(
                  image: AssetImage(AssetConstants.editing),
                  height: 25,
                  width: 25),
            ),
          )
        ],
      ),
      body: Container(
        height: double.infinity,
        width: double.infinity,
        padding: const EdgeInsets.fromLTRB(10, 20, 10, 10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              child: Row(
                children: [
                  CircleAvatar(
                    radius: 40,
                    child: Image(image: AssetImage(AssetConstants.profile)),
                  ),
                  const SizedBox(width: 20),
                  SizedBox(
                    width: MediaQuery.of(context).size.width * 0.6,
                    child: const Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Jane Doe",
                          style: TextStyle(
                              fontSize: 16,
                              color: Colors.black,
                              fontWeight: FontWeight.bold),
                        ),
                        SizedBox(height: 5),
                        Text(
                          "Guru Ghasidas University, Bilaspur",
                          style: TextStyle(
                            fontSize: 12,
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(height: 5),
                        Text(
                          "New York, US",
                          style: TextStyle(
                            fontSize: 10,
                            color: Color(0x88000000),
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
            const SizedBox(height: 10),
            const Text(
              "Lorem epsume set enum ind fif ncsj soa buasd biibref bgeg ffgai hfjahf uafjaf aofhauf uf",
              style: TextStyle(fontSize: 12, color: Colors.black),
            ),
            const Divider(height: 20),
            Expanded(
              child: ListView(
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(0, 10, 0, 10),
                    child: Container(
                      padding: const EdgeInsets.fromLTRB(15, 15, 15, 0),
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(12),
                          boxShadow: const [
                            BoxShadow(blurRadius: 12, color: Color(0x22000000))
                          ]),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text(
                                "Activity",
                                style: TextStyle(
                                    fontSize: 16,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold),
                              ),
                              InkWell(
                                child: Container(
                                  padding: const EdgeInsets.all(5),
                                  child: const Center(
                                    child: Text(
                                      "Create Post",
                                      style: TextStyle(
                                          fontSize: 12, color: Color(0xffC3E703)),
                                    ),
                                  ),
                                ),
                              )
                            ],
                          ),
                          const SizedBox(height: 10),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                width: 150,
                                padding: const EdgeInsets.all(10),
                                decoration: BoxDecoration(
                                  color: const Color(0x22000000),
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: Column(
                                  children: [
                                    const Text(
                                      "kaasndias ffk nanfih fafnwhf ioaohf woifi oahif hfi afh iaeehf af fnaefn ",
                                      style: TextStyle(
                                          color: Colors.black, fontSize: 12),
                                    ),
                                    const SizedBox(height: 10),
                                    Image(image: AssetImage(AssetConstants.image))
                                  ],
                                ),
                              ),
                              Container(
                                width: 150,
                                padding: const EdgeInsets.all(10),
                                decoration: BoxDecoration(
                                  color: const Color(0x22000000),
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: const Column(
                                  children: [
                                    Text(
                                      "kaasndias ffk nanfih fafnwhf ioaohf woifi oahif hfi afh iaeehf af fnaefn jnsadi nf ansuf f aufb  foiad fia bfusb f fihf SF ISF O",
                                      style: TextStyle(
                                          color: Colors.black, fontSize: 12),
                                    ),
                                  ],
                                ),
                              )
                            ],
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              IconButton(onPressed: () {}, 
                              icon: const Icon(Icons.arrow_right_alt))],
                          )
                        ],
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(0, 10, 0, 10),
                    child: Container(
                      padding: const EdgeInsets.fromLTRB(15, 15, 15, 0),
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(12),
                          boxShadow: const [
                            BoxShadow(blurRadius: 12, color: Color(0x22000000))
                          ]),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text(
                                "Experience",
                                style: TextStyle(
                                    fontSize: 16,
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold),
                              ),
                              InkWell(
                                child: Container(
                                  padding: const EdgeInsets.all(5),
                                  child: const Center(
                                    child: Text(
                                      "Add/Edit Experience",
                                      style: TextStyle(
                                          fontSize: 12, color: Color(0xffC3E703)),
                                    ),
                                  ),
                                ),
                              )
                            ],
                          ),
                          const SizedBox(height: 10),
                          const SingleExperienceWidget(),
                          const SingleExperienceWidget(),
                          const SingleExperienceWidget(),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}

class SingleExperienceWidget extends StatelessWidget {
  const SingleExperienceWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0, 10, 0, 10),
      child: Row(
                              children: [
                                Image(
                                  height: 50,
                                  width: 50,
                                  image: AssetImage(AssetConstants.facebook)),
                                const SizedBox(width: 10),
                                SizedBox(
                                  width: MediaQuery.of(context).size.width*0.7,
                                  child: const Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: [
                                      SizedBox(
                                        height: 50,
                                        child: Column(
                                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          children: [
                                            Text(
                                              "Flutter Developer",
                                              style: TextStyle(
                                                fontSize: 14,
                                                color: Colors.black
                                              )),
                                            Text(
                                              "• Meta, Inc.",
                                              style: TextStyle(
                                                fontSize: 14,
                                                color: Colors.black
                                              )),
                                          ],
                                        ),
                                      ),
                                      Text(
                                        "Jun 2024 - \nJul 2025",
                                        style: TextStyle(
                                          fontSize: 12,
                                          color: Color(0x77000000)
                                        )),
                                    ],
                                  ),
                                ),
                              ],
                            ),
    );
  }
}