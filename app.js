/* ========= i18n UI text ========= */
const ui = {
  ar:{
    title:"بيتزا القيصر | المنيو",
    appName:"بيتزا القيصر",
    top:{
      locations:"موقع افرعنا",
      dinein:"الافرع المتوفر بها صاله",
      branchesTitle:"مواقع بيتزا القيصر",
      searchPlaceholder:"ابحث عن صنف...",
      nearest:"اقرب فرع",
      locating:"جاري تحديد الأقرب..."
    },
    tabs:{
      all:"الكل", veg:"بيتزا نباتية", meat:"بيتزا لحوم", sea:"بيتزا بحرية", chicken:"بيتزا دجاج",
      selected:"بيتزا مختاره",
      sandwiches:"ساندويشات",
      sides:"الاصناف الجانبيه", drinks:"المشروبات", new:"الاصناف الجديده", offers:"عروض القيصر"
    },
    labels:{ price:"السعر" }
  },
  en:{
    title:"Qaysar Pizza | Menu",
    appName:"Qaysar Pizza",
    top:{
      locations:"Our Locations",
      dinein:"Branches with Dine-in",
      branchesTitle:"Qaysar Pizza Locations",
      searchPlaceholder:"Search for an item...",
      nearest:"Nearest branch",
      locating:"Finding nearest..."
    },
    tabs:{
      all:"All", veg:"Veggie Pizza", meat:"Meat Pizza", sea:"Seafood Pizza", chicken:"Chicken Pizza",
      selected:"Selected Pizza",
      sandwiches:"Sandwiches",
      sides:"Sides", drinks:"Drinks", new:"New Items", offers:"Qaysar Offers"
    },
    labels:{ price:"Price" }
  }
};

/* ========= One shared items list ========= */
const items = [
  // pizzas
  {
    id:"veg-1", cat:"veg", img:"images/خضار-01.jpg",
    name:{ar:"خضار بيتزا", en:"Veggie Pizza"},
    desc:{ar:"بيتزا نباتية لذيذة مع خضار طازجة وجبنة موتزاريلا. طعم رائع ومكونات صحية.", en:"Delicious veggie pizza with fresh vegetables and mozzarella."},
    price:null
  },
  {
    id:"meat-1", cat:"meat", img:"images/اللحوم-01.jpg",
    name:{ar:"محبي اللحوم بيتزا", en:"Meat Lovers"},
    desc:{ar:"بيتزا اللحوم الكلاسيكية مع لحم طازج وجبنة موتزاريلا. وجبة مشبعة ولذيذة.", en:"Classic meat pizza with mozzarella. Satisfying and delicious."},
    price:null
  },
  {
    id:"meat-2", cat:"meat", img:"images/ببروني-01.jpg",
    name:{ar:"ببروني بيتزا", en:"Pepperoni"},
    desc:{ar:"بيتزا الببروني الشهية مع ببروني حار وجبنة موتزاريلا. طعم قوي ومميز.", en:"Spicy pepperoni pizza with mozzarella. Strong and distinctive taste."},
    price:null
  },
  {
    id:"meat-3", cat:"meat", img:"images/الحارة-01.jpg",
    name:{ar:"البيتزا الحارة", en:"Hot Pizza"},
    desc:{ar:"البيتزا الحارة لمحبي البيتزا الحاره مجموعه من قطع اللحم مع قطع الفلفل الاخضر الحار ", en:"Hot pizza for lovers of spicy pizza: a selection of meat pieces with green chili peppers"},
    price:null
  },
  {
    id:"meat-4", cat:"meat", img:"images/MAXICAN BEEF.jpg",
    name:{ar:"بيتزا لحم مكسيكي حار ", en:"Mxican Beef"},
    desc:{ar:"قطع من اللحم المفروم الزاخره بالنكهات مع الهالبينو و التوابل مستوحاه من النكهات المكسيكيه  ", en:"Flavored chunks of minced meat with jalapeños and spices inspired by Mexican flavors"},
    price:null
  },
  {
    id:"meat-5", cat:"meat", img:"images/رانش ببروني-01.jpg",
    name:{ar:"رانش ببروني ", en:"Pepperoni Ranch Sauce"},
    desc:{ar:"بيتزا الببروني المميزه بقاعده من صلصه الرانش", en:"Our signature pepperoni pizza with a ranch dressing base"},
    price:null
  },
  {
    id:"meat-6", cat:"meat", img:"images/ستيك-01.jpg",
    name:{ar:"ستيك بيتزا ", en:"Steak pizza"},
    desc:{ar:"شرائح الستيك مع جبن الموزريلا لتجربه مشبعة و غنية بالنكهات ", en:"Steak slices with mozzarella cheese for a satisfying and flavorful experience"},
    price:null
  },
  {
    id:"meat-7", cat:"meat", img:"images/سلامي-01.jpg",
    name:{ar:"سلامي بيتزا", en:"Salami pizza"},
    desc:{ar:"شرائح سلامي مقرمشه , جبن يذوب و وصوص البيتزا يكمل المشهد .. سهله بس ما تمل منها ", en:"Crispy salami slices, melting cheese, and pizza sauce complete the picture... easy, but you won't get tired of it"},
    price:null
  },
  {
    id:"sea-1", cat:"sea", img:"images/بيتزا ( رانش كونو تونا )-01.jpg",
    name:{ar:"رانش كونو تونا بيتزا", en:"Ranch Cono Tuna"},
    desc:{ar:"بيتزا بحرية مع تونا طازجة وصلصة رانش. نكهة بحرية مميزة.", en:"Seafood pizza with tuna and ranch sauce."},
    price:null
  },
  {
    id:"sea-2", cat:"sea", img:"images/كونا تونا-01.jpg",
    name:{ar:"كونو تونا بيتزا", en:"Cono Tuna"},
    desc:{ar:"بيتزا التونا الكلاسيكية مع تونا وجبنة موتزاريلا. طعم بحري لذيذ.", en:"Classic tuna pizza with mozzarella."},
    price:null
  },
  {
    id:"chicken-1", cat:"chicken", img:"images/زنجر-01.jpg",
    name:{ar:"زنجر بيتزا", en:"Zinger"},
    desc:{ar:"بيتزا الدجاج مع قطع دجاج مشوية وجبنة موتزاريلا. وجبة مشبعة ومغذية.", en:"Chicken pizza with mozzarella. Satisfying meal."},
    price:null
  },
  {
    id:"chicken-2", cat:"chicken", img:"images/الفاهيتا-01.jpg",
    name:{ar:"فاهيتا بيتزا", en:"Fajita"},
    desc:{ar:"بيتزا الفاهيتا مع دجاج متبل وخضار. نكهة مكسيكية لذيذة.", en:"Fajita pizza with seasoned chicken and vegetables."},
    price:null
  },
  {
    id:"chicken-3", cat:"chicken", img:"images/الفريدو-01.jpg",
    name:{ar:"ألفريدو بيتزا", en:"Alfredo pizza"},
    desc:{ar:"بيتزا ألفريدو بصلصة ألفريدو الكريمية وجبنة موزريلا، بطعم غني وناعم.", en:"Alfredo pizza with creamy Alfredo sauce and mozzarella for a rich, smooth taste."},
    price:null
  },
  {
    id:"chicken-4", cat:"chicken", img:"images/باربكيو الدجاج-01.jpg",
    name:{ar:"باربكيو الدجاج", en:"BBQ chicken"},
    desc:{ar:"بيتزا باربكيو الدجاج بقطع دجاج وصوص باربكيو وجبنة موزريلا بطعم مدخّن لذيذ.", en:"BBQ chicken pizza with chicken pieces, BBQ sauce, and mozzarella."},
    price:null
  },
  {
    id:"chicken-5", cat:"chicken", img:"images/بيتزا الدجاج-01.jpg",
    name:{ar:"بيتزا الدجاج", en:"Chicken pizza"},
    desc:{ar:"بيتزا الدجاج الكلاسيكية بقطع دجاج وجبنة موزريلا وصلصة بيتزا متوازنة.", en:"Classic chicken pizza with chicken pieces, mozzarella, and our pizza sauce."},
    price:null
  },
  {
    id:"chicken-6", cat:"chicken", img:"images/سبايسي رانش-01.jpg",
    name:{ar:"سبايسي رانش", en:"Spicy Chicken Ranch"},
    desc:{ar:"بيتزا سبايسي رانش بقطع دجاج وصوص رانش حار وجبنة موزريلا لنكهة قوية.", en:"Spicy chicken ranch pizza with mozzarella for a bold kick."},
    price:null
  },
  {
    id:"chicken-7", cat:"chicken", img:"images/شاورما-01.jpg",
    name:{ar:"شاورما دجاج", en:"Chicken shawarma"},
    desc:{ar:"بيتزا شاورما الدجاج بقطع شاورما وتتبيلة مميزة مع جبنة موزريلا.", en:"Chicken shawarma pizza with seasoned shawarma and mozzarella."},
    price:null
  },
    {
    id:"chicken-8", cat:"chicken", img:"images/مكسيكي دجاج-01.jpg",
    name:{ar:"مكسيكي دجاج", en:"Spicy Mexican Chicken"},
    desc:{ar:"بيتزا دجاج مكسيكي حار بقطع دجاج وتوابل مكسيكية ولمسة حارة.", en:"Spicy Mexican chicken pizza with seasoned chicken and a hot kick."},
    price:null
  },


  // selected (featured pizzas)
  {
    id:"selected-1", cat:"selected", img:"images/الفصول الاربعة.jpg",
    name:{ar:"الفصول الاربعة", en:"Four Seasons"},
    desc:{ar:"بيتزا الفصول الأربعة تجمع أربع نكهات مختلفة في بيتزا واحدة لتجربة متنوعة.", en:"Four Seasons pizza with four different flavors in one pizza for a varied taste."},
    price:null
  },
  {
    id:"selected-2", cat:"selected", img:"images/قيصر بيتزا.jpg",
    name:{ar:"قيصر بيتزا", en:"Caesar Pizza"},
    desc:{ar:"قيصر بيتزا (وصفة خاصة) بخلطة القيصر المميزة وجبنة موزريلا وصلصة غنية.", en:"Caesar Pizza (signature recipe) with our special Caesar mix and mozzarella."},
    price:null
  },
  {
    id:"selected-3", cat:"selected", img:"images/قيصر دجاج.jpg",
    name:{ar:"قيصر دجاج", en:"Caesar Chicken"},
    desc:{ar:"قيصر دجاج بقطع دجاج وخلطة القيصر الخاصة وجبنة موزريلا بطعم مميز.", en:"Caesar Chicken pizza with chicken, our Caesar mix, and mozzarella."},
    price:null
  },
  {
    id:"selected-4", cat:"selected", img:"images/مارغريتا.jpg",
    name:{ar:"مارغريتا", en:"Margherita"},
    desc:{ar:"مارغريتا الكلاسيكية: صلصة طماطم وجبنة موزريلا ولمسة أعشاب بسيطة.", en:"Classic Margherita with tomato sauce, mozzarella, and a light herb touch."},
    price:null
  },
  {
    id:"selected-5", cat:"selected", img:"images/تيركي.jpg",
    name:{ar:"تيركي", en:"Turkey"},
    desc:{ar:"بيتزا تيركي بشرائح تيركي وجبنة موزريلا لوجبة خفيفة ومشبعة.", en:"Turkey pizza with turkey slices and mozzarella—light yet satisfying."},
    price:null
  },
  {
    id:"selected-6", cat:"selected", img:"images/الهوت دوج-01.jpg",
    name:{ar:"هوت دوغ بيتزا", en:"Hot Dog Pizza"},
    desc:{ar:"هوت دوغ بيتزا بقطع هوت دوغ وجبنة موزريلا—خيار ممتع ومختلف.", en:"Hot Dog pizza with hot dog pieces and mozzarella—fun and different."},
    price:null
  },

  // sandwiches
  {
    id:"sand-1", cat:"sandwiches", img:"images/جبنه الموزريلا.jpg",
    name:{ar:"جبنه الموزريلا", en:"Mozzarella Cheese"},
    desc:{ar:"ساندويش جبنة الموزريلا بجبنة غنية وطعم كريمي مناسب كوجبة خفيفة.", en:"Mozzarella cheese sandwich with a rich, creamy taste—perfect for a quick bite."},
    price:"3.50"
  },
  {
    id:"sand-2", cat:"sandwiches", img:"images/الدجاج المشوي.jpg",
    name:{ar:"الدجاج المشوي", en:"Grilled Chicken"},
    desc:{ar:"ساندويش الدجاج المشوي بقطع دجاج مشوي وتتبيلة خفيفة وطعم متوازن.", en:"Grilled chicken sandwich with seasoned grilled chicken for a balanced flavor."},
    price:"3.50"
  },
  {
    id:"sand-3", cat:"sandwiches", img:"images/شاورما.jpg",
    name:{ar:"شاورما", en:"Shawarma"},
    desc:{ar:"ساندويش شاورما بتتبيلة شاورما مميزة ونكهة شرقية محببة.", en:"Shawarma sandwich with signature shawarma seasoning and a Middle Eastern flavor."},
    price:"3.50"
  },
  {
    id:"sand-4", cat:"sandwiches", img:"images/السلامي.jpg",
    name:{ar:"السلامي", en:"Salami"},
    desc:{ar:"ساندويش السلامي بشرائح سلامي وجبنة بطعم غني ومشبع.", en:"Salami sandwich with salami slices and cheese—rich and satisfying."},
    price:"3.50"
  },
  {
    id:"sand-5", cat:"sandwiches", img:"images/تيركي مدخن.jpg",
    name:{ar:"تيركي مدخن", en:"Smoked Turkey"},
    desc:{ar:"ساندويش تيركي مدخن بشرائح تيركي مدخن ونكهة مدخّنة لطيفة.", en:"Smoked turkey sandwich with smoked turkey slices and a gentle smoky flavor."},
    price:"3.50"
  },


  // sides
  { id:"side-1", cat:"sides", img:"images/sweet chilli wings.jpg", name:{ar:"اجنحة حار حلو صوص", en:"Sweet & Spicy Wings"}, desc:{ar:"أجنحة دجاج بصوص سويت تشيلي—مزيج حلو وحار بطعم لذيذ.", en:"Chicken wings tossed in a sweet and spicy sauce."}, price:"2.70" },
  { id:"side-2", cat:"sides", img:"images/wings BBQ.jpg", name:{ar:"اجنحة باربكيو صوص", en:"BBQ Wings"}, desc:{ar:"أجنحة دجاج بصوص باربكيو غني—نكهة مدخّنة ومحبة للجميع.", en:"Juicy chicken wings coated with rich BBQ sauce."}, price:"2.70" },
  { id:"side-3", cat:"sides", img:"images/boneless.jpg", name:{ar:"اجنحة بدون عظم", en:"Boneless Wings"}, desc:{ar:"قطع دجاج بدون عظم مقرمشة وسهلة الأكل—مناسبة للمشاركة.", en:"Crispy boneless chicken wings, easy to enjoy."}, price:"2.70" },
  { id:"side-5", cat:"sides", img:"images/oreintal wings_Artboard 1 copy 6.jpg", name:{ar:"اجنحة شرقيه", en:"Oriental Wings"}, desc:{ar:"أجنحة شرقية بتتبيلة خاصة ونكهات عربية مميزة.", en:"Chicken wings seasoned with oriental spices."}, price:"2.70" },
  { id:"side-4", cat:"sides", img:"images/4x4.jpg", name:{ar:"4x4", en:"4x4"}, desc:{ar:"وجبة 4×4 مناسبة للمشاركة—خيار مشبع وممتع.", en:"4x4 meal suitable for sharing—a satisfying and enjoyable option."}, price:"4.00" },
  { id:"side-6", cat:"sides", img:"images/cheese garlic bread.jpg", name:{ar:"خبز بالجبنه و الثوم", en:"cheese garlic bread"}, desc:{ar:"خبز بالثوم والجبنة—مقرمش من الأطراف وغني بالجبنة.", en:"Garlic and cheese bread—crispy on the edges and rich in cheese."}, price:"1.75" },
  { id:"side-7", cat:"sides", img:"images/french fries.jpg", name:{ar:"بطاطا فرايز", en:"french fries"}, desc:{ar:"بطاطا فرايز مقرمشة—خفيفة ولذيذة.", en:"Crispy potato fries—light and delicious."}, price:"1.00" },
  { id:"side-8", cat:"sides", img:"images/garlic bread.jpg", name:{ar:"خبز بالثوم", en:"garlic bread"}, desc:{ar:"خبز بالثوم بطعم غني ولمسة زبدة.", en:"Garlic bread with a rich flavor and a touch of butter."}, price:"1.00" },
  { id:"side-9", cat:"sides", img:"images/lasagnia.jpg", name:{ar:"لزانيا", en:"lasagnia"}, desc:{ar:"لازانيا بصلصة غنية وجبنة ذائبة—وجبة مشبعة.", en:"Lasagna with a rich sauce and melted cheese—a filling meal."}, price:"4.00" },
  { id:"side-10", cat:"sides", img:"images/mozarella sticks.jpg", name:{ar:"موزريلا ستيك", en:"mozarella sticks"}, desc:{ar:"أصابع موزريلا مقرمشة بجبنة ذائبة من الداخل.", en:"Crispy mozzarella sticks with melted cheese inside."}, price:"2.25" },
  { id:"side-11", cat:"sides", img:"images/msahab chicken.jpg", name:{ar:"دجاج مسحب", en:"msahab chicken"}, desc:{ar:"دجاج مسحب مقرمش—مناسب كوجبة جانبية.", en:"Crispy pulled chicken—suitable as a side dish."}, price:"2.25" },
  { id:"side-12", cat:"sides", img:"images/nuggets.jpg", name:{ar:"نجيتس ", en:"nuggets"}, desc:{ar:"نجتس دجاج مقرمشة—خيار خفيف وسريع.", en:"Crispy chicken nuggets—a light and quick option."}, price:"2.25" },
  { id:"side-13", cat:"sides", img:"images/pepproni garlic bread.jpg", name:{ar:"خبز بالثوم بالجبنه مع الببروني", en:"pepproni garlic cheese bread"}, desc:{ar:"خبز بالثوم والجبنة مع ببروني—نكهة أقوى ولمسة مميزة.", en:"Garlic bread and cheese with pepperoni—a stronger flavor and a distinctive touch."}, price:"1.75" },
  { id:"side-14", cat:"sides", img:"images/Potato wedges.jpg", name:{ar:"بطاطا ويدجز", en:"Potato wedges"}, desc:{ar:"بطاطا ويدجز بتتبيلة خاصة—مقرمشة وشهية.", en:"Potato wedges with a special seasoning—crispy and delicious."}, price:"2.00" },
  { id:"side-15", cat:"sides", img:"images/salad buffet.jpg", name:{ar:"بوفيه السلطه", en:"salad buffet"}, desc:{ar:"بوفيه سلطة طازج بتشكيلة متنوعة.", en:"A fresh salad buffet with a diverse selection."}, price:"3.50" },
  { id:"side-16", cat:"sides", img:"images/WINGS PARTY.jpg", name:{ar:"حفله الأجنحه", en:"Wings Party"}, desc:{ar:"حفلة الأجنحة—تشكيلة أجنحة مناسبة للمشاركة.", en:"Wings Party—A selection of wings suitable for sharing."}, price:"4.00" },
  
  

  // new
  { id:"new-1", cat:"new", img:"images/عالماشي الفريدو-01.jpg", name:{ar:"عالماشي الفريدو", en:"Almashi Alfredo"}, desc:{ar:"عالماشي ألفريدو—خيار سريع بطعم ألفريدو الكريمي.", en:"Almashi Alfredo—an on-the-go option with creamy Alfredo flavor."}, price:"2.5" },
  { id:"new-2", cat:"new", img:"images/عالماشي ببروني-01.jpg", name:{ar:"عالماشي ببروني", en:"Almashi Pepperoni"}, desc:{ar:"عالماشي ببروني—خيار سريع بنكهة ببروني مميزة.", en:"Almashi Pepperoni—an on-the-go option with pepperoni flavor."}, price:"2.5" },
  { id:"new-3", cat:"new", img:"images/عالماشي خضار-01.jpg", name:{ar:"عالماشي خضار", en:"Almashi Veggie"}, desc:{ar:"عالماشي خضار—خيار سريع بخضار طازجة وجبنة.", en:"Almashi Veggie—an on-the-go option with veggies and cheese."}, price:"2.5" },
  { id:"new-4", cat:"new", img:"images/عالماشي زنجر-01.jpg", name:{ar:"عالماشي زنجر", en:"Almashi Zinger"}, desc:{ar:"عالماشي زنجر—خيار سريع بنكهة زنجر.", en:"Almashi Zinger—an on-the-go option with zinger flavor."}, price:"2.5" },
  { id:"new-5", cat:"new", img:"images/عالماشي ستيك-01.jpg", name:{ar:"عالماشي ستيك", en:"Almashi Steak"}, desc:{ar:"عالماشي ستيك—خيار سريع بنكهة ستيك غنية.", en:"Almashi Steak—an on-the-go option with a rich steak flavor."}, price:"2.5" },
  { id:"new-6", cat:"new", img:"images/عالماشي شاورما-01.jpg", name:{ar:"عالماشي شاورما", en:"Almashi Shawarma"}, desc:{ar:"عالماشي شاورما—خيار سريع بتتبيلة شاورما.", en:"Almashi Shawarma—an on-the-go option with shawarma seasoning."}, price:"2.5" },

  // offers (Qaysar Offers)
  { id:"offer-1", cat:"offers", img:"images/offer1.jpg", name:{ar:"العرض الثلاثي صغير", en:"Offer 3 Small Pizza"},  desc:{ar:"", en:""}, price:"5.50" },
  { id:"offer-2", cat:"offers", img:"images/offer2.jpg", name:{ar:"العرض الثلاثي وسط",  en:"Offer 3 Medium Pizza"}, desc:{ar:"", en:""}, price:"10.50" },
  { id:"offer-3", cat:"offers", img:"images/offer3.jpg", name:{ar:"العرض الثلاثي كبير", en:"Offer 3 Large Pizza"},  desc:{ar:"", en:""}, price:"15.50" },

  { id:"offer-4", cat:"offers", img:"images/offer4.jpg", name:{ar:"العرض الثنائي صغير", en:"Offer 2 Small Pizza"},  desc:{ar:"", en:""}, price:"5.00" },
  { id:"offer-5", cat:"offers", img:"images/offer5.jpg", name:{ar:"العرض الثنائي وسط",  en:"Offer 2 Medium Pizza"}, desc:{ar:"", en:""}, price:"8.60" },
  { id:"offer-6", cat:"offers", img:"images/offer6.jpg", name:{ar:"العرض الثنائي كبير", en:"Offer 2 Large Pizza"},  desc:{ar:"", en:""}, price:"12.50" },

  { id:"offer-7", cat:"offers", img:"images/offer7.jpg", name:{ar:"العرض الفردي صغير", en:"Offer 1 Small Pizza"},  desc:{ar:"", en:""}, price:"3.00" },
  { id:"offer-8", cat:"offers", img:"images/offer8.jpg", name:{ar:"العرض الفردي وسط",  en:"Offer 1 Medium Pizza"}, desc:{ar:"", en:""}, price:"5.00" },
  { id:"offer-9", cat:"offers", img:"images/offer9.jpg", name:{ar:"العرض الفردي كبير", en:"Offer 1 Large Pizza"},  desc:{ar:"", en:""}, price:"7.50" },


  // drinks
  { id:"drink-1", cat:"drinks", img:"images/DARK.png", name:{ar:"مشروب غازي اورجينال", en:"Soft drink Black Original"}, desc:{ar:"مشروب غازي أورجينال—منعش وخفيف.", en:"Black original soft drink—refreshing and light."}, price:"0.50" },
  { id:"drink-2", cat:"drinks", img:"images/LEMON.png",       name:{ar:"مشروب غازي ليمون ",       en:"Soft drink Lemon"},       desc:{ar:"مشروب غازي ليمون—منعش بنكهة ليمون.", en:"Lemon soft drink—refreshing lemon flavor."}, price:"0.50" },
  { id:"drink-3", cat:"drinks", img:"images/matrix-orange.png",   name:{ar:"مشروب غازي برتقال",   en:"Soft drink Orange"},   desc:{ar:"مشروب غازي برتقال—منعش بنكهة البرتقال.", en:"Orange soft drink—refreshing orange flavor."}, price:"0.50" },
  { id:"drink-5", cat:"drinks", img:"images/matrix-diet-up.png",       name:{ar:"مشروب غازي ليمون دايت ",       en:"Soft drink Lemon Diet "},       desc:{ar:"مشروب غازي ليمون دايت—خفيف بدون سكر بنكهة ليمون.", en:"Lemon diet soft drink—sugar-free lemon option."}, price:"0.50" },
  { id:"drink-4", cat:"drinks", img:"images/matrix-diet-orgenal.png",   name:{ar:"مشروب غازي دايت اورجينال  ",   en:"Soft drink Original Diet "},   desc:{ar:"مشروب غازي دايت أورجينال—خفيف بدون سكر.", en:"Original diet soft drink—a lighter, sugar-free option."}, price:"0.50" },
  { id:"drink-6", cat:"drinks", img:"images/Small size water.png",   name:{ar:"مياه حجم صغير",   en:"Small size water "},   desc:{ar:"مياه حجم صغير—للترطيب السريع.", en:"Small water bottle—quick hydration."}, price:"0.25" },
  { id:"drink-7", cat:"drinks", img:"images/Orange Juice.png",   name:{ar:"عصير برتقال ",   en:"Orange Juice "},   desc:{ar:"عصير برتقال—طعم فواكه منعش.", en:"Orange juice—fresh fruity taste."}, price:"0.35" },
  { id:"drink-8", cat:"drinks", img:"images/Apple Juice.png",   name:{ar:"عصير تفاح ",   en:"Apple Juice "},   desc:{ar:"عصير تفاح—طعم فواكه منعش.", en:"Apple juice—fresh fruity taste."}, price:"0.35" },
  { id:"drink-9", cat:"drinks", img:"images/Original Soft drink 1 Liter.png",   name:{ar:"مشروب غازي اورجينال 1 لتر",   en:"Original Soft drink 1 Liter "},   desc:{ar:"مشروب غازي أورجينال 1 لتر—حجم عائلي.", en:"Original soft drink 1 liter—family size."}, price:"0.75" },
];

/* ========= State ========= */
let lang = "ar";
let cat = "all";
let searchText = "";

// ✅ Categories that should appear under the "All / الكل" tab
// Includes the new "selected" pizzas so they also show under "الكل".
const ALL_TAB_CATS = new Set(["veg","meat","sea","chicken","selected","sandwiches","sides","drinks","new","offers"]);

/* ========= Fast indexes (performance) ========= */
// Precompute searchable text and group items by category to avoid scanning the whole list every render.
const _itemsByCat = new Map();
const _allItems = [];
for (const it of items){
  const c = it.cat || 'all';
  if(!_itemsByCat.has(c)) _itemsByCat.set(c, []);
  _itemsByCat.get(c).push(it);

  // cache lowercase search text for both languages
  const ar = `${it.name?.ar || ''} ${it.desc?.ar || ''}`.toLowerCase();
  const en = `${it.name?.en || ''} ${it.desc?.en || ''}`.toLowerCase();
  it._q = { ar, en };

  if (ALL_TAB_CATS.has(c)) _allItems.push(it);
}

function getBaseList(){
  return cat === 'all' ? _allItems : (_itemsByCat.get(cat) || []);
}

/* ========= Elements ========= */
const langBtn = document.getElementById("langBtn");
const gallery = document.getElementById("gallery");

// Event delegation (faster than adding a click listener per card)
gallery?.addEventListener('click', (e)=>{
  const card = e.target.closest('.card');
  if(!card || !gallery.contains(card)) return;
  const id = card.dataset.id;
  if(id) showItemDetails(id);
});
const tabs = document.getElementById("tabs");
const searchBox = document.getElementById("searchBox");
const btnNearest = document.getElementById("btnNearest");
const txtNearest = document.getElementById("txtNearest");

const tabAll = document.getElementById("tabAll");
const tabVeg = document.getElementById("tabVeg");
const tabMeat = document.getElementById("tabMeat");
const tabSea = document.getElementById("tabSea");
const tabChicken = document.getElementById("tabChicken");
const tabSelected = document.getElementById("tabSelected");
const tabSandwiches = document.getElementById("tabSandwiches");
const tabSides = document.getElementById("tabSides");
const tabDrinksTxt = document.getElementById("tabDrinksTxt");
const tabNew = document.getElementById("tabNew");
const tabOffers = document.getElementById("tabOffers");

const tabVegTxt = document.getElementById("tabVegTxt");
const tabMeatTxt = document.getElementById("tabMeatTxt");
const tabSeaTxt = document.getElementById("tabSeaTxt");
const tabChickenTxt = document.getElementById("tabChickenTxt");
const tabSelectedTxt = document.getElementById("tabSelectedTxt");
const tabSandwichesTxt = document.getElementById("tabSandwichesTxt");
const tabSidesTxt = document.getElementById("tabSidesTxt");
const tabNewTxt = document.getElementById("tabNewTxt");
const tabOffersTxt = document.getElementById("tabOffersTxt");

const btnLocations = document.getElementById("btnLocations");
const menuLocations = document.getElementById("menuLocations");
const btnDineIn = document.getElementById("btnDineIn");
const menuDineIn = document.getElementById("menuDineIn");

const txtLocations = document.getElementById("txtLocations");
const txtDineIn = document.getElementById("txtDineIn");
const txtBranchesTitle = document.getElementById("txtBranchesTitle");

const metaAppName = document.getElementById("metaAppName");
const metaAppleTitle = document.getElementById("metaAppleTitle");

/* ========= Dropdown handling ========= */
function closeAllDrops(){
  if (menuLocations) menuLocations.hidden = true;
  if (menuDineIn) menuDineIn.hidden = true;
}
btnLocations?.addEventListener("click",(e)=>{
  e.stopPropagation();
  const wasHidden = menuLocations.hidden;
  closeAllDrops();
  menuLocations.hidden = !wasHidden;
});
btnDineIn?.addEventListener("click",(e)=>{
  e.stopPropagation();
  const wasHidden = menuDineIn.hidden;
  closeAllDrops();
  menuDineIn.hidden = !wasHidden;
});
document.addEventListener("click",(e)=>{
  if(!e.target.closest(".dropWrap") && !e.target.closest(".langWrap")){
    closeAllDrops();
  }
});

/* ========= Apply language ========= */
function setTabLabel(btn, span, text){
  if(span) span.textContent = text;
  else if(btn) btn.textContent = text;
}

function applyLang(l){
  lang = l;
  localStorage.setItem("qaysar_lang", l);

  document.documentElement.dir  = l === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = l;

  document.title = ui[l].title;
  metaAppName?.setAttribute("content", ui[l].title);
  metaAppleTitle?.setAttribute("content", ui[l].appName);

  txtLocations && (txtLocations.textContent = ui[l].top.locations);
  txtDineIn && (txtDineIn.textContent = ui[l].top.dinein);
  txtBranchesTitle && (txtBranchesTitle.textContent = ui[l].top.branchesTitle);
  searchBox && (searchBox.placeholder = ui[l].top.searchPlaceholder);
  txtNearest && (txtNearest.textContent = ui[l].top.nearest);

  tabAll.textContent = ui[l].tabs.all;
  setTabLabel(tabVeg, tabVegTxt, ui[l].tabs.veg);
  setTabLabel(tabMeat, tabMeatTxt, ui[l].tabs.meat);
  setTabLabel(tabSea, tabSeaTxt, ui[l].tabs.sea);
  setTabLabel(tabChicken, tabChickenTxt, ui[l].tabs.chicken);
  tabSelected && setTabLabel(tabSelected, tabSelectedTxt, ui[l].tabs.selected);
  tabSandwiches && setTabLabel(tabSandwiches, tabSandwichesTxt, ui[l].tabs.sandwiches);
  setTabLabel(tabSides, tabSidesTxt, ui[l].tabs.sides);
  tabDrinksTxt && (tabDrinksTxt.textContent = ui[l].tabs.drinks);
  setTabLabel(tabNew, tabNewTxt, ui[l].tabs.new);
  tabOffers && setTabLabel(tabOffers, tabOffersTxt, ui[l].tabs.offers);

  // reset search
  searchText = "";
  if (searchBox) searchBox.value = "";

  // ✅ keep active tab consistent (in case anything changed)
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  const activeBtn = document.querySelector(`.tab[data-cat="${cat}"]`) || document.querySelector('.tab[data-cat="all"]');
  activeBtn?.classList.add("active");
  cat = activeBtn?.dataset?.cat || "all";

  // Update static branch names in the dropdowns
  applyBranchNames();

  render();
}

/* ========= Language toggle ========= */
langBtn?.addEventListener("click", ()=>{
  const newLang = lang === "ar" ? "en" : "ar";
  applyLang(newLang);
  langBtn.textContent = newLang === "ar" ? "English" : "العربية";
});

/* ========= Tabs click ========= */
tabs?.addEventListener("click",(e)=>{
  const btn = e.target.closest(".tab");
  if(!btn) return;

  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  btn.classList.add("active");

  cat = btn.dataset.cat || "all";

  render();
});

/* ========= Search ========= */
searchBox?.addEventListener("input",(e)=>{
  searchText = e.target.value || "";

  render();
});


/* ========= Nearest Branch (Direct Directions) ========= */
const BRANCHES = [
  { ar:"شارع المدينة المنورة", en:"Madina Munawara St", dest_ar:"بيتزا القيصر شارع المدينة المنورة", dest_en:"Qaysar Pizza Madina Munawara Street", aliases:["المدينة المنورة","madina munawara","madina"] },
  { ar:"شارع مكة", en:"Mecca St", dest_ar:"بيتزا القيصر شارع مكة", dest_en:"Qaysar Pizza Mecca Street", aliases:["مكة","mecca"] },
  { ar:"شارع عبد الله غوشه", en:"Abdullah Ghosheh St", dest_ar:"بيتزا القيصر عبد الله غوشة", dest_en:"Qaysar Pizza Abdullah Ghosheh", aliases:["عبد الله غوشة","ghosheh","ghousheh","ghousheh"] },
  { ar:"الشميساني", en:"Shmeisani", dest_ar:"بيتزا القيصر الشميساني", dest_en:"Qaysar Pizza Shmeisani", aliases:["shmeisani","shmaisani","shmeisani"] },
  { ar:"الرابيه", en:"Rabieh", dest_ar:"بيتزا القيصر الرابية", dest_en:"Qaysar Pizza Rabieh", aliases:["الرابية","rabieh","rabiyeh","rabiya"] },
  { ar:"الجبيهه", en:"Jubeiha", dest_ar:"بيتزا القيصر الجبيهة", dest_en:"Qaysar Pizza Jubeiha", aliases:["الجبيهة","jubeiha","jubaiha","al jubeiha"] },
  { ar:"طبربور", en:"Tabarbour", dest_ar:"بيتزا القيصر طبربور", dest_en:"Qaysar Pizza Tabarbour", aliases:["tabarbour","tabarboor","tabarbor","tabarbour"] },
  { ar:"طارق", en:"Tareq", dest_ar:"بيتزا القيصر طارق", dest_en:"Qaysar Pizza Tareq", aliases:["tareq","tariq"] },
  { ar:"شفا بدران", en:"Shafa Badran", dest_ar:"بيتزا القيصر شفا بدران", dest_en:"Qaysar Pizza Shafa Badran", aliases:["shafa badran","shafa","badran"] },
  { ar:"مرج الحمام", en:"Marj Al Hamam", dest_ar:"بيتزا القيصر مرج الحمام", dest_en:"Qaysar Pizza Marj Al Hamam", aliases:["marj al hamam","marj"] },
  { ar:"الياسمين", en:"Yasmeen", dest_ar:"بيتزا القيصر الياسمين", dest_en:"Qaysar Pizza Yasmeen", aliases:["yasmeen","yasmine","al yasmeen","ضاحية الياسمين"] },
  { ar:"المقابلين", en:"Muqabalain", dest_ar:"بيتزا القيصر المقابلين", dest_en:"Qaysar Pizza Muqabalain", aliases:["muqabalain","moqabalain","al muqabalain","مقابلين"] },
  { ar:"ابوعلندا", en:"Abu Alanda", dest_ar:"بيتزا القيصر أبو علندا", dest_en:"Qaysar Pizza Abu Alanda", aliases:["abu alanda","abu alanda","abou alanda","أبو علندا"] },
  { ar:"شارع عبد الله غوشه", en:"Abdullah Ghosheh St", dest_ar:"بيتزا القيصر عبد الله غوشة", dest_en:"Qaysar Pizza Abdullah Ghosheh", aliases:["7th circle","gousheh","ghosheh"] },
  { ar:"الزرقاء / الاوتوستراد", en:"Zarqa Autostrade", dest_ar:"بيتزا القيصر الزرقاء الأوتوستراد", dest_en:"Qaysar Pizza Zarqa Autostrade", aliases:["الزرقاء","autostrade","autostrad","الأوتوستراد"] },
  { ar:"الزرقاء الجديده", en:"New Zarqa", dest_ar:"بيتزا القيصر الزرقاء الجديدة", dest_en:"Qaysar Pizza New Zarqa", aliases:["new zarqa","الزرقاء الجديدة"] },
  { ar:"اربد", en:"Irbid", dest_ar:"بيتزا القيصر اربد", dest_en:"Qaysar Pizza Irbid", aliases:["irbid","إربد","اربد"] },
  { ar:"مادبا", en:"Madaba", dest_ar:"بيتزا القيصر مادبا", dest_en:"Qaysar Pizza Madaba", aliases:["madaba","مادبا"] },
  { ar:"السلط", en:"Salt", dest_ar:"بيتزا القيصر السلط", dest_en:"Qaysar Pizza Salt", aliases:["salt","as-salt","السلط"] },
  { ar:"العقبه", en:"Aqaba", dest_ar:"بيتزا القيصر العقبة", dest_en:"Qaysar Pizza Aqaba", aliases:["aqaba","العقبة","العقبه"] },
];

// Deduplicate branches (safety)
const _seen = new Set();
for (let i = BRANCHES.length - 1; i >= 0; i--) {
  const k = BRANCHES[i].ar;
  if (_seen.has(k)) BRANCHES.splice(i,1);
  else _seen.add(k);
}

/* ========= Branch name i18n (dropdown lists) ========= */
function _normArBranch(s){
  return (s || '')
    .trim()
    .replace(/^شارع\s+/,'')
    .replace(/[إأآ]/g,'ا')
    .replace(/ة/g,'ه')
    .replace(/ى/g,'ي')
    .replace(/ؤ/g,'و')
    .replace(/ئ/g,'ي')
    .replace(/\s+/g,' ');
}

const _branchArToEn = new Map(BRANCHES.map(b => [b.ar, b.en]));
const _branchNormToEn = new Map(BRANCHES.map(b => [_normArBranch(b.ar), b.en]));

function applyBranchNames(){
  document.querySelectorAll('[data-branch-ar]').forEach(el => {
    const ar = el.getAttribute('data-branch-ar') || el.textContent.trim();
    const en = _branchArToEn.get(ar) || _branchNormToEn.get(_normArBranch(ar)) || ar;
    el.textContent = (lang === 'ar') ? ar : en;
  });
}

function _normalize(s){
  return (s || "")
    .toString()
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, "") // Arabic diacritics
    .replace(/[إأآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/[^\w\u0600-\u06ff]+/g, " ")
    .trim();
}
function _compact(s){
  return _normalize(s).replace(/[^a-z0-9\u0600-\u06ff]+/g, "");
}

function _findBranchByAddress(addrText){
  const hay = _compact(addrText);
  if(!hay) return null;

  for(const b of BRANCHES){
    const tokens = [b.ar, b.en, ...(b.aliases || [])]
      .map(_compact)
      .filter(Boolean);

    if(tokens.some(t => t && hay.includes(t))) return b;
  }
  return null;
}

function _fallbackBranchByGov(addrObj){
  const joined = Object.values(addrObj || {}).join(" ");
  const h = _compact(joined);

  // Aqaba / Irbid / Madaba / Salt / Zarqa
  if(h.includes(_compact("العقبة")) || h.includes("aqaba")) return BRANCHES.find(b=>b.ar==="العقبه");
  if(h.includes(_compact("اربد")) || h.includes("irbid")) return BRANCHES.find(b=>b.ar==="اربد");
  if(h.includes(_compact("مادبا")) || h.includes("madaba")) return BRANCHES.find(b=>b.ar==="مادبا");
  if(h.includes(_compact("السلط")) || h.includes("salt")) return BRANCHES.find(b=>b.ar==="السلط");
  if(h.includes(_compact("الزرقاء")) || h.includes("zarqa")){
    // try detect which zarqa branch
    if(h.includes(_compact("الأوتوستراد")) || h.includes("autostrade") || h.includes("autostrad")) return BRANCHES.find(b=>b.ar==="الزرقاء / الاوتوستراد");
    return BRANCHES.find(b=>b.ar==="الزرقاء الجديده");
  }

  // default (Amman): Madina Munawara
  return BRANCHES.find(b=>b.ar==="شارع المدينة المنورة");
}

function _openDirections(originLat, originLng, destText){
  const url = `https://www.google.com/maps/dir/?api=1&origin=${originLat},${originLng}&destination=${encodeURIComponent(destText)}&travelmode=driving`;
  // iPhone opens Maps better with same-tab navigation
  window.location.href = url;
}

async function openNearestBranch(){
  closeAllDrops();

  const oldText = txtNearest?.textContent || "";
  if(btnNearest) btnNearest.disabled = true;
  if(txtNearest) txtNearest.textContent = ui[lang].top.locating;

  const restore = ()=>{
    if(btnNearest) btnNearest.disabled = false;
    if(txtNearest) txtNearest.textContent = ui[lang].top.nearest || oldText;
  };

  if(!navigator.geolocation){
    restore();
    alert(lang === "ar" ? "جهازك لا يدعم تحديد الموقع." : "Geolocation is not supported on this device.");
    return;
  }

  navigator.geolocation.getCurrentPosition(async (pos)=>{
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    try{
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1&accept-language=${lang==="ar" ? "ar" : "en"}`;
      const res = await fetch(url, { headers: { "Accept":"application/json" } });
      const data = await res.json();

      const addr = data?.address || {};
      const text = [data?.display_name || "", ...Object.values(addr)].join(" ");

      let branch = _findBranchByAddress(text);
      if(!branch) branch = _fallbackBranchByGov(addr);

      const dest = (lang === "ar") ? branch.dest_ar : branch.dest_en;
      restore();
      _openDirections(lat, lng, dest);
    }catch(err){
      // fallback: open the most central branch
      const branch = BRANCHES.find(b=>b.ar==="شارع المدينة المنورة");
      const dest = (lang === "ar") ? branch.dest_ar : branch.dest_en;
      restore();
      _openDirections(lat, lng, dest);
    }
  }, ()=>{
    restore();
    alert(lang === "ar"
      ? "لازم تسمح بالموقع عشان نفتح لك دايركشن على أقرب فرع."
      : "Please allow location access so we can open directions to the nearest branch.");
  }, { enableHighAccuracy:true, timeout:9000, maximumAge:600000 });
}

btnNearest?.addEventListener("click", openNearestBranch);


/* ========= Image fallback ========= */
const FALLBACK_IMG = "images/qaysar-logo.png";
// Some projects may include image filenames saved in a "#U0627#U0644..." style.
// This helper retries loading a "#U...."-encoded variant before falling back to the logo.
function toHashUFilename(path){
  if(!path) return path;
  const idx = path.lastIndexOf("/");
  const dir = idx >= 0 ? path.slice(0, idx + 1) : "";
  const name = idx >= 0 ? path.slice(idx + 1) : path;
  let out = "";
  for (const ch of name){
    const code = ch.codePointAt(0);
    out += code > 127 ? `#U${code.toString(16).toUpperCase().padStart(4,'0')}` : ch;
  }
  return dir + out;
}

// When language is English, try to load an English version of the image.
// Default convention: same filename but inside `images/en/`.
// You can also optionally add `img_en` (or `imgEn`) on any item for custom paths.
function resolveImgSrc(it){
  const base = it?.img || "";
  if(lang !== "en") return { primary: base, fallback: "" };

  const explicit = it?.img_en || it?.imgEn || it?.imgEN;
  const primary = explicit || (base.startsWith("images/")
    ? ("images/en/" + base.slice("images/".length))
    : base);

  return { primary, fallback: base };
}

function imgError(img){
  if(!img) return;
  const orig = img.dataset?.orig || img.getAttribute("data-orig") || img.src;
  const fallback = img.dataset?.fallback || img.getAttribute("data-fallback") || "";

  // 1) try the "#U...." encoded filename variant
  if(!img.dataset.tryHash){
    img.dataset.tryHash = "1";
    img.src = toHashUFilename(orig);
    return;
  }

  // 2) if we were trying an English image, fall back to the base (Arabic) image once
  if(!img.dataset.triedFallback && fallback && img.src !== fallback){
    img.dataset.triedFallback = "1";
    delete img.dataset.tryHash;
    img.dataset.orig = fallback;
    img.src = fallback;
    return;
  }

  // 3) final fallback to logo
  img.onerror = null;
  img.src = FALLBACK_IMG;
}

function safeImgTag(primarySrc, alt, fallbackSrc){
  const fb = fallbackSrc || "";
  return `<img src="${primarySrc}" alt="${alt}" data-orig="${primarySrc}" data-fallback="${fb}" onerror="imgError(this)">`;
}

/* ========= Render cards ========= */
let _renderToken = 0;

function createCard(it){
  const card = document.createElement('div');
  card.className = 'card' + (it.cat === 'drinks' ? ' drink' : '');
  card.dataset.id = it.id;

  const n = it.name?.[lang] || '';
  const showPrice = it.price != null && String(it.price).trim() !== '';

  const { primary, fallback } = resolveImgSrc(it);

  const img = document.createElement('img');
  // Lazy loading prevents the page from freezing when there are many items/images
  img.loading = 'lazy';
  img.decoding = 'async';
  img.alt = n;
  img.dataset.orig = primary;
  img.dataset.fallback = fallback || '';
  img.onerror = () => imgError(img);
  img.src = primary;

  const nameDiv = document.createElement('div');
  nameDiv.className = 'cardName';
  nameDiv.textContent = n;

  card.appendChild(img);
  card.appendChild(nameDiv);

  if (showPrice){
    const priceDiv = document.createElement('div');
    priceDiv.className = 'cardPrice';
    priceDiv.textContent = `${ui[lang].labels.price}: ${it.price}`;
    card.appendChild(priceDiv);
  }

  return card;
}

function render(){
  if(!gallery) return;
  _renderToken++;
  const token = _renderToken;

  // Clear fast
  gallery.textContent = '';

  const q = (searchText || '').trim().toLowerCase();
  const base = getBaseList();

  // Filter without scanning the full `items` array when possible
  const filtered = !q
    ? base
    : base.filter(it => (it._q?.[lang] || '').includes(q));

  // Chunked rendering to keep UI responsive
  let i = 0;
  const CHUNK = 24;

  function pump(){
    if(token !== _renderToken) return;
    const frag = document.createDocumentFragment();
    for(let c = 0; c < CHUNK && i < filtered.length; c++, i++){
      frag.appendChild(createCard(filtered[i]));
    }
    gallery.appendChild(frag);

    if(i < filtered.length){
      requestAnimationFrame(pump);
    }
  }

  requestAnimationFrame(pump);
}


/* ========= Modal ========= */
let sidebarOverlay, closeSidebarBtn, sidebarPizzaImage, sidebarName, sidebarPrice, sidebarDesc;

function initSidebar(){
  sidebarOverlay = document.getElementById("sidebarOverlay");
  closeSidebarBtn = document.getElementById("closeSidebar");
  sidebarPizzaImage = document.getElementById("sidebarPizzaImage");
  sidebarName = document.getElementById("sidebarName");
  sidebarPrice = document.getElementById("sidebarPrice");
  sidebarDesc = document.getElementById("sidebarDesc");

  closeSidebarBtn?.addEventListener("click", hideDetails);
  sidebarOverlay?.addEventListener("click", hideDetails);

  document.addEventListener("keydown",(e)=>{
    if(e.key === "Escape" && document.body.classList.contains("bar-open")){
      hideDetails();
    }
  });
}

function showItemDetails(id){
  const it = items.find(x=>x.id===id);
  if(!it) return;

  const n = it.name?.[lang] || "";
  const d = it.desc?.[lang] || "";

  // Use the same resilient loading logic as cards:
  // - tries English image (images/en/...) when lang=en
  // - tries #U.... encoded variant
  // - falls back to base image then logo
  if(sidebarPizzaImage){
    const { primary, fallback } = resolveImgSrc(it);
    sidebarPizzaImage.dataset.orig = primary;
    sidebarPizzaImage.dataset.fallback = fallback || "";
    delete sidebarPizzaImage.dataset.tryHash;
    delete sidebarPizzaImage.dataset.triedFallback;
    sidebarPizzaImage.onerror = ()=> imgError(sidebarPizzaImage);
    sidebarPizzaImage.src = primary;
    sidebarPizzaImage.alt = n;
  }

  sidebarName.textContent = n;

  const showPrice = it.price != null && String(it.price).trim() !== "";
  sidebarPrice.textContent = showPrice ? `${ui[lang].labels.price}: ${it.price}` : "";
  sidebarPrice.style.display = showPrice ? "block" : "none";

  sidebarDesc.textContent = d || "";

  document.body.classList.add("bar-open");
}
function hideDetails(){
  document.body.classList.remove("bar-open");
}

/* ========= Slider ========= */
const slides = document.querySelectorAll(".slide");
const dotsWrap = document.getElementById("dots");
let s = 0;

if(dotsWrap && slides.length){
  slides.forEach((_,i)=>{
    const d = document.createElement("span");
    d.className = "dot" + (i===0 ? " active" : "");
    d.addEventListener("click", ()=> showSlide(i));
    dotsWrap.appendChild(d);
  });
}
function showSlide(i){
  const dots = document.querySelectorAll(".dot");
  slides[s]?.classList.remove("active");
  dots[s]?.classList.remove("active");

  s = i;
  slides[s]?.classList.add("active");
  dots[s]?.classList.add("active");
}
setInterval(()=>{
  if(!slides.length) return;
  showSlide((s+1) % slides.length);
}, 3000);

/* ========= Active red state for top buttons ========= */
const topPillButtons = document.querySelectorAll(".topPill .dropBtn, .topPill .langBtn");
topPillButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    topPillButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  });
});

/* ========= Mini maps (📍) ========= */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".miniMapBtn");
  if (!btn) return;

  e.stopPropagation(); // ✅ مهم

  const row = btn.closest(".branchRow");
  const wrap = row?.querySelector(".miniMapWrap");
  const src = btn.dataset.map;

  if (!wrap || !src) return;

  // إذا مفتوحة: سكّرها
  if (!wrap.hidden) {
    wrap.hidden = true;
    wrap.innerHTML = "";
    return;
  }

  // سكّر أي خريطة ثانية مفتوحة
  document.querySelectorAll("#menuLocations .miniMapWrap, #menuDineIn .miniMapWrap").forEach(w => {
    w.hidden = true;
    w.innerHTML = "";
  });

  // افتح الحالية
  wrap.hidden = false;
  wrap.innerHTML = `
    <iframe loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      src="${src}">
    </iframe>
  `;
});

/* ========= Init ========= */
initSidebar();
const savedLang = localStorage.getItem("qaysar_lang") || "ar";
applyLang(savedLang);
if (langBtn) langBtn.textContent = savedLang === "ar" ? "English" : "العربية";
