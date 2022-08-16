'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ba7c305fc099642c9b075ad81bec49c0",
".git/config": "b175c3cf7440a69c8931afc97110e3fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "852548bf64bcd4d4fef2fe2583d886c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "76cef2fdc1e3d8a89564eab1874c9c31",
".git/logs/refs/heads/master": "76cef2fdc1e3d8a89564eab1874c9c31",
".git/logs/refs/remotes/origin/master": "168439fdf78da125540ab84b92fc3f01",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/05/6bd150fa7208c902d68f904c7acd9cd01faf0c": "7af6a4b0d9a83361826d3a1de683ec43",
".git/objects/09/16358a1de7d56c2659aecb8cf689c31ed0ef5d": "748f538010f6b80396dc806ef9e50b12",
".git/objects/09/3347d38de3099441902319dcb55c26f2f6138a": "0d46759162e7dcce8fabd062b4849a59",
".git/objects/0a/9d9f1a5eb9c940d69c22e48e965a8f1eb3dbea": "cfed58583b693d4288dedc0acc6f4a70",
".git/objects/0c/2016f3788f89ebd33fdb2733f5cbd9ca1df3a0": "c5b9cbda585a01c66b278b2c2737fcd0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/15/978e0f76d989025fa74446838a6e6f66878a31": "32b1bc4fa545ff12426fef8e4e713c99",
".git/objects/21/c7c42645060e87a13b9dc2056fc19c01213995": "0c535a8b6abfe8ded47450cc1be6dcd0",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/3ebcb1bbdcdf1ebe2656ef4996a0a4db2f688c": "65b81728ba7deb86ac060fb3854fcb62",
".git/objects/2e/977392034ebc237eb23c70877e03880ad6152c": "2695da9614653a42630f54cadf642879",
".git/objects/30/895d51497b952a8bb853ffed2e0541afed14a1": "65be6dcc7bab008d6b56cccf0e55a9fa",
".git/objects/30/b852f744936e94e9f89694d707f527ae4c3748": "82771005fc7b42282362ceec4081caf2",
".git/objects/33/745cbc559aa768068e280daefc21f5d11f07ac": "138a0fb5fc5ff36fbac53e440329097d",
".git/objects/37/57b90986bd531d4195be5dac4b44d28dd4bb46": "8e259020eb5eef98f9ff7d2a0baf3a01",
".git/objects/3c/288ba36116750a2367e15f33c053f4fc98a6be": "5e64adf55b698032ecae3db316035675",
".git/objects/3c/d474ab126d5855ff817824fa424e2e92fa8a0f": "d1be9364cbbc48b676a667ea55014730",
".git/objects/49/f9534024dbbeeb9bb76bb2bf8ef4024c6f12ed": "9c27faf3eb0080b869dc5f6c47ed9b9b",
".git/objects/4b/04c2ad837a26f8acc5f7407c98eee722681e88": "c9f8ce958e2edf31016378d62d8e0595",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/ffa8f5736b3e4f73e3c7ddc1de1cb9665753f4": "07b922841b08b82fa40082204796a0d1",
".git/objects/51/19e0243d49c7472d2ff0160f1a682799cd3c84": "f9034f877666144b4473ffd3341088d0",
".git/objects/55/89edfaf7a41e83ab9514de5b1f4d053e2a0322": "08040adbf6f73b7d584e621e33f5c597",
".git/objects/55/bb5fc902d7e8ba0f5560f699a0e7e6786061ba": "b6483c0670a7aca92f1e180b3b0837b3",
".git/objects/55/f8a71b8307b23c1dc0a21c29637c754ff2598b": "c0e546cbc7b371ec819bb6879cd444ac",
".git/objects/58/23316b830dafec07f6e96da0e09551e785b2bc": "3415f05f5d9a48807dafb2e30004d266",
".git/objects/58/acf9de2bb4a11538f2fd0d13d42fac6877aeba": "8dd5f95b15777abb39e9e5ea59dddcc5",
".git/objects/5c/d86961a444d8559516e816a2b0e8a3aa5493e0": "34cbb2a44014af193350d9120ef902a8",
".git/objects/5d/69ab72e64cd1b6e0192e9485d7e296d89bae52": "c7d38c36015bbf33aacb4080aec89861",
".git/objects/5d/8377528d25a6a35403921ab465d93e358ec976": "c7e7d81a603b525b5b5afcd74c195bc0",
".git/objects/60/402c959bd291e5c3f205f9fd89d9325f1ec164": "fe8e079ea3a3359e431f8e2afc07fe39",
".git/objects/60/893c716833afd37689617229f9496f99a882e0": "c2cd7af249af660c349e47843c2de970",
".git/objects/65/61b51bc31845d93ebd7dd45c38a7f0f9d2dc7a": "dfe8d5c657c75b4bb8a6e6c4bafa4b88",
".git/objects/6e/151604f0fe6431156192ff12664536381d598d": "af68c2752a0501b5be488ebd1f34188c",
".git/objects/6e/6776c1b1eea8cdb3ed9e0b74406b5be3ca0e67": "f5097e1ac5aa20df98339e7d16232c85",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/074fd56c8e9a96afaaa4752fcd8a40633b9d21": "d80ec2458a01b2046bb3a4b805e25967",
".git/objects/7b/8f135958c0ad399ba93b19f82bcdea86962d8c": "197583f2144758d34c7a093347c1239a",
".git/objects/7e/9b1af64177b8c490b4d7f37a9b3e104cac22c3": "aaafd92eb1ed9af82c517d5e14fa5542",
".git/objects/7f/365fd1c9f032251c0ea11f9914719d9ea99496": "0c3843ed718455c044ce73209ecefd06",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/452bff5dc1fc93d194a549b0d42a874687d430": "cf6a2c916718e3467f59eded3f33d1e4",
".git/objects/96/357934b75fe1f2df82bca79875dcf6058bebe9": "c6ae10ed8ae675cff36a37a1dd0a58b4",
".git/objects/98/4dc4d966079dfac7302720912a0ee2189c4ce9": "7587040dfbef9aa009ae201918472bbe",
".git/objects/9c/bc1640aae60dad8a4cb8dd2547739d6db4a73f": "f7336f5b85d66215de08c190ab640a1d",
".git/objects/9e/605a268abbab4d149cffda5b2518bf695721ed": "3ac340cbd114ed1fa813020996e7e902",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/877786f311c22a0a3d1faf051a9b77add63812": "463881c2dbda50d07d3bf98583c22322",
".git/objects/a8/222edb592ff75502ee9ebf42889c943059eca0": "441336069a90fdd9f955e22dd22ea54e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/da633c35241c1751a7f5003b0cd94dda05a00c": "49b7b083351422534aa1584c1002f3f4",
".git/objects/ad/ab9a6f260e86e01cb5c7d0cc532eff9e56ed12": "fe893682a27bbd9628344bd7271a7aa9",
".git/objects/ae/1dd58bfac4a39048e324a5b7406a1a3c0e9655": "dba1499a2f5aefb259853649afee9d4a",
".git/objects/b0/119e4f47e1c1caca7f14b29a30295ad143903a": "7e90f5634411ddd3133c8685b6f3e4c0",
".git/objects/b0/c69fbb3a0c18fd56887358c0adaa063c72cf52": "85e82681a9502074a876fc331f16e273",
".git/objects/b2/10218ca1d6a2aa38aa8dd3e4e361232d8610c3": "f277741fb16fabe95593396fbb4c42c4",
".git/objects/b6/108fb64d52f7b9f4cecd863ae11ec0ec7076b4": "b75af20abb603f0cc6793565ebc2f186",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8445b3e66b21147168e989acef1e2b65b168d5": "76adb1bf1873ebb89e41876ed7a258bc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/bd/6c5b13063e9d9e3a04166d5397fab73723a7ca": "90ec740bcb1357ef9cf55e4beef85954",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/91ea1eca55d05cd90988d1a43c2ab6ef625238": "17a70c0625104b3eee78576abe32c265",
".git/objects/c2/4ea8120a40f5e403f2e64880eea5208f5252c4": "fbb768e3207a388528684262ba2afe56",
".git/objects/c7/923dfb920f18e1ca42364308c10ddbe021dfd3": "157be90351bbb63b9b66e5c30b00292d",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/f5c6df419b1ed1d0d206ca7956b4ac2aceb9c8": "415cafeaa3131111097ddf455a430dca",
".git/objects/d6/393b6eece750ce402f8293fe3a4c1ec712b044": "d225db15cba793894fa670093ffbd171",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/28e043ac72db1e6d79f9860d8b7f2e062221e8": "b444143d2888b6dfa03a93f453f4aa77",
".git/objects/d9/525a194dec15a87259d942d1421de0fcfcfc96": "5622fcdbe3932fbec6ec30fdb599e8b9",
".git/objects/d9/d06d0b7f9135fe226e7de91860c5f7c39a25ef": "a8fd6073d1a613bbaa6c9631bc8dc06e",
".git/objects/dc/be615382b9cf01f96db014298838516642ef88": "e13a2615019f678e35c8847dbb31076e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/bbd60b81706934c05b40aa0f6384c537b26506": "332be12b464681d7e0c8d4b104b1b25a",
".git/objects/e8/4cda4fd25f99e26b543c7ff70e61f493432c88": "ad967c0625a4e0d36e15610415697f87",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/891483127560866c87774a548466063f011c7f": "0534a755e747adb3432de82943ecefe9",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/00eba9d8affdda574fd7ba904d17bf13649be0": "50802f4c1d495a003f243821bbfe4826",
".git/objects/eb/31bb79b59f4b9d879d4c4e5d85ff74d91f016a": "c4fa2698e45818b3de958aa2956de3c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/db8015cd5823358df1fefad84fba09c19f80ac": "b846053d7efad76bb858b5ff6de0746b",
".git/objects/ee/4c66cd6ef11dabaa8687999d879769d1d69e04": "99d6f987370fb82194965a6b053d9921",
".git/objects/f0/93f1f7b7eb3dc8916a875fadc7282c8885f41d": "119bbcabbeed9fa68630970b60c0dd56",
".git/objects/f2/8f1fa20fac449575e966402d4b7a350c93b404": "b48dee0c167bc9345d6cb32c0bed7969",
".git/objects/f6/506a2318ead85e955139788de40e39312d6eb1": "af043152c4fe36129279d15f9eba1bc7",
".git/objects/f9/640f1dcc856b8f5ccebd15327deae80919f54f": "c28d77de5c55a31f36bccd80e520b978",
".git/objects/fb/30a505fb5a6a6c4dfd2436d30002443fdc5359": "b0d3eed6dafec7b850e5bdde00f82744",
".git/objects/fd/dde29e0bd5ba97fd906a04258787ef9e8895d8": "1a8d418c4a19011fbb13cfd3667e4195",
".git/refs/heads/master": "3ab812880f0226306deb5c27fe2698aa",
".git/refs/remotes/origin/master": "3ab812880f0226306deb5c27fe2698aa",
"assets/AssetManifest.json": "898823dd3077ab42025bde4960d57f25",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/assets/images/background.jpg": "d6cfdee2201a188161da83fda086ebd1",
"assets/assets/images/background2.jpg": "38bf89a7d8c0692b5f7ee2ffc0a1eaea",
"assets/assets/images/center_scrollbar.png": "e123166339679552533c29985120462b",
"assets/assets/images/ic_email.svg": "d1e2105e550f8d1052a6b3f2860944a0",
"assets/assets/images/ic_github.svg": "dedb506b24f273df25c742c6ef1654da",
"assets/assets/images/ic_linkedin.svg": "4ceedca018edc6a9d0c54ee20a58617a",
"assets/assets/images/ic_location.svg": "667661a6364413b07d7ac9f3e8f5f462",
"assets/assets/images/ic_phone.svg": "8442f4b2753d10e5b0744393ac6999cf",
"assets/assets/images/ic_telegram.svg": "de0e4ea92445525f2dfbe651e5113eb0",
"assets/assets/images/img_hupad.jpg": "8cc89fa39642a757861a0673c226325a",
"assets/assets/images/img_hupad1.jpg": "6043732587346747d986d6d62c0e3f50",
"assets/assets/images/img_hupad10.jpg": "fd058fec631f64e811a58c70f7bb6681",
"assets/assets/images/img_hupad11.jpg": "fdfa6a5be633a1d50e15f566b6407113",
"assets/assets/images/img_hupad12.jpg": "0daf38ef49d3fa2b6cf0a56cbfaa1bf8",
"assets/assets/images/img_hupad13.jpg": "16af1bdc3de8ad9abdfbee7fcf989bac",
"assets/assets/images/img_hupad14.jpg": "c3fa70b2a4c244569c3fe0018d33972c",
"assets/assets/images/img_hupad15.jpg": "534b4433fb1b5417f809ff89a754070a",
"assets/assets/images/img_hupad16.jpg": "c793b4f80f73f2649a8b4e3e2667d964",
"assets/assets/images/img_hupad17.jpg": "423fcc60321017b7326ddc2a0764c530",
"assets/assets/images/img_hupad2.jpg": "25768b8b959d7afa5f29e584f83c8022",
"assets/assets/images/img_hupad3.jpg": "15f7906deb4882f89b209d063647d472",
"assets/assets/images/img_hupad4.jpg": "901d69a09842014e89f4048d250bedf2",
"assets/assets/images/img_hupad5.jpg": "ea521a4f80f633a53a29922bfc6a90fc",
"assets/assets/images/img_hupad6.jpg": "4def7cfb6ff1a49fcbdd3c11a020a174",
"assets/assets/images/img_hupad7.jpg": "d6ab808761333cbc4fb437c0ba598c60",
"assets/assets/images/img_hupad8.jpg": "fc2bab31c66101d47f3dfcaa855a5c48",
"assets/assets/images/img_hupad9.jpg": "12fba16fc472a4f1eaa8359835638eb8",
"assets/assets/images/img_my_music.jpg": "bb6b2b955f3aa3a35d6f372be52a43bd",
"assets/assets/images/img_my_music1.jpg": "b567c671ecc498586c71b1635e819a58",
"assets/assets/images/img_my_music2.jpg": "da240416e519061f22d73aabfb501551",
"assets/assets/images/img_my_music3.jpg": "9d7a459c8ce0c089ae0fd4984e30e64c",
"assets/assets/images/img_my_music4.jpg": "698a748bcf6e33d0696159d87be2f46d",
"assets/assets/images/img_my_music5.jpg": "9ebaa1313f027b515e808f299d571a97",
"assets/assets/images/img_my_music6.jpg": "7faf93bff1f895a3b60d83ff8972b9e1",
"assets/assets/images/img_my_music7.jpg": "8da4de757a2382fecd6c8a6943a22d7f",
"assets/assets/images/img_my_music8.jpg": "5f4c39f1c8779267f56616429c522993",
"assets/assets/images/img_my_shop.jpg": "34d7c7b5a07f65e84029dff0974941dd",
"assets/assets/images/img_my_shop1.jpg": "3659a28d842291316d416ea0d9562c77",
"assets/assets/images/img_my_shop10.jpg": "0af389537a29ce5f8694e981afa3536d",
"assets/assets/images/img_my_shop11.jpg": "d091d72b23b07a60fd80a99b985eee96",
"assets/assets/images/img_my_shop12.jpg": "fe307583d6b642dfa4e8ca5541b0afb3",
"assets/assets/images/img_my_shop13.jpg": "8a99a222d7ab79a9f7d4aae6e27aa3c3",
"assets/assets/images/img_my_shop14.jpg": "6f333ee5212c4cce163201ddc6f42b67",
"assets/assets/images/img_my_shop15.jpg": "1742466a9e57f62fe1fdb668a01fc543",
"assets/assets/images/img_my_shop2.jpg": "e8d19413c3e03d0d4bc2c8f99af703d1",
"assets/assets/images/img_my_shop3.jpg": "49b8cfa03b834212975366d9d43efd96",
"assets/assets/images/img_my_shop4.jpg": "dc3145d9f8847eff25767aa28f033e8b",
"assets/assets/images/img_my_shop5.jpg": "e60f29332bca0a9837baa48973970b57",
"assets/assets/images/img_my_shop6.jpg": "61250b0d6ba264c03ba6fcf75c495544",
"assets/assets/images/img_my_shop7.jpg": "a623c69521c91d29f3e534081d6256dd",
"assets/assets/images/img_my_shop8.jpg": "4aba8bd51d45101d50fda113db8bad3c",
"assets/assets/images/img_my_shop9.jpg": "d323546af6eb581556abadf9e65e0186",
"assets/assets/images/img_usage_report1.jpg": "dff310995a0b25aab842a252de41d747",
"assets/assets/images/img_usage_report2.jpg": "a600540ca1664d1581923d1cd59f74c8",
"assets/assets/images/img_usage_report3.jpg": "b0f7b469419d0d6ad4961559c75394fb",
"assets/assets/images/img_usage_report4.jpg": "aee2803b614e26241ffe8a6a8309137b",
"assets/assets/images/img_usage_tracker.jpg": "c0070db9250e0f2d2fb7d3b587c84f37",
"assets/assets/images/my_img.jpg": "4731c2dedc6e71de5488ff397af446ff",
"assets/assets/images/plus_pattern.png": "42e78353888fd4fd7a298bef057ab44f",
"assets/FontManifest.json": "006acf5d9bc7ff071076a6d2598eada5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5f8b29379f0382a79a41b04aec629c98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b2368c9b4211a91be3b42cb38a30cfbc",
"/": "b2368c9b4211a91be3b42cb38a30cfbc",
"main.dart.js": "1607cbc3424bf9e63d667f7cc5c57150",
"manifest.json": "33915bd01b6fbc2ad11a77923e641282",
"version.json": "5eba2b3f48e84c0565b6c84a1e17c11c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
