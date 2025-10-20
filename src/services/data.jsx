//HomeSlider

import ex1 from "../assets/ex1.webp";
import ex2 from "../assets/ex2.webp";
import ex3 from "../assets/ex3.webp";
import ex4 from "../assets/ex4.webp";
import ex5 from "../assets/ex5.webp";
import BaseLink from "../components/BaseLink.jsx";
import video1 from "../assets/videos/video-1.mp4";
import video2 from "../assets/videos/video-2.mp4";
import video3 from "../assets/videos/video-3.mp4";
import video4 from "../assets/videos/video-4.mp4";
import video5 from "../assets/videos/video-5.mp4";
import video6 from "../assets/videos/video-6.mp4";
import WhatsappContact from "../components/WhatsappContact";
import { Link } from "react-router-dom";

export const homeSliderData = {
  TR: [
    {
      title: "Gerekliyse tellenin!",
      article: "Hayır, tel takmak yemek yemenize engel değil.",
      image: ex2,
    },
    {
      title: "Ortodonti bir bilimdir.",
      article: "Aynı zamanda sanattır, gülüşünüzü güzelleştireceğim.",
      image: ex3,
    },
    {
      title: "Dişlerinizi fırçalayın.",
      article:
        "Dişlerini fırçalayanlar %68 oranında diş hekimlerine ihtiyaç duymazlar.",
      image: ex1,
    },
    {
      title: "Korkmayın.",
      article:
        "Dişlerinizin güzelliği kadar diş, çene ve ağız sağlığınız için de bir ortodontist'e danışın.",
      image: ex4,
    },
    // {
    //   title: "Lorem ipsum dolor sit amet.",
    //   article: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //   image: ex5,
    // },
  ],
  EN: [
    {
      title: "Get braces if necessary!",
      article:
        "No, wearing braces does not prevent you from eating. Please DO NOT believe anyone who says 'I had braces and lost a lot of weight'.",
      image: ex2,
    },
    {
      title: "Orthodontics is a science.",
      article: "It is also art, I'm going to make your smile beautiful.",
      image: ex3,
    },
    {
      title: "Brush your teeth.",
      article: "68% of those who brush their teeth don't need a dentist.",
      image: ex1,
    },
    {
      title: "Don't be afraid.",
      article:
        "Consult an orthodontist for your teeth, jaw and oral health as well as the beauty of your teeth.",
      image: ex4,
    },
    // {
    //   title: "Lorem ipsum dolor sit amet.",
    //   article: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //   image: ex5,
    // },
  ],
};

//Home Before&After
export const beforeAfter = [
  {
    TR: `Bu hastamda üst çene darlığına bağlı hem estetik hem de fonksiyonel problemler mevcuttu. İki aşamalı bir tedavi planı uygulamayı tercih ettim. Önce RME yöntemiyle üst çene genişletildi, peşinden sabit tedavi ile denge ve estetik sağlandı. 
    Hazırladığım hareketli görüntüde iki aşamayı da görebilirsiniz.`,
    EN: `My patient here had both esthetic and functional problems due to her narrow upper jaw. I prefered a two step treatment plan for this case. First expansion of the upper jaw by RME (Rapid Maxillar Expansion) method, then esthetic and balance management by fixed treatment.
    I prepared a video with the photos I took so that you can see two steps of the treatment consecutively.`,
    video: video4,
  },
  {
    TR: `Çekimsiz sabit tedavi (yani diş çekilmeden yapılan tel tedavisi) bu hastamdaki gibi hafif çapraşıklığı bulunan vakalarda tercih edilmesi gereken tedavi yöntemidir. Dişlerin altındaki kaide tellerin etkisiyle hafifçe genişletilir ve yerine sığmayarak eğrilen dişler uygun açılarla sıraya dizilir. Böylece göze hitap eden bir diş kavsi elde edilmiş olur.`,
    EN: `Fixed treatment without extraction is for those who has slightly crowded teeth as this patient of mine. The bony base of the teeth is gently expanded and the crowded and rotated teeth are leveled on a staight arch. Thus, an appealing smile is achieved.`,
    video: video3,
  },
  {
    TR: `Bu hastamda "Fonksiyonel Sınıf II Bölüm 2" denen kapanış bozukluğu mevcuttu. Basitçe anlatmaya çalışırsam üst ön dişlerin perdelemesi sebebiyle alt çene geriye hapsolmuştu. Ayrıca derin kapanış ve çapraşıklık sebebiyle estetik olarak hayli kötüydü. 
    Lastiklerini disiplinli bir şekilde kullanan hastamın sabit tedavisi yalnızca 11 ay sürdü! 
    Darısı tüm tedavi olmayı erteleyip gülümserken dişlerini eliyle gizleyenlerin başına... 😀`,
    EN: `We have a so called "Functional Class II Division 2" case in this patient of mine. Simply, the lower jaw was restricted in backwards position by the hanging upper front teeth. Due to deep bite and crowding, esthetics was not okay at all, too. 
    My patient managed to use hia elastics properly as I instructed, and the case was finished only in 11 months! I hope the same for those who shyly hide their smile behing their palms... 😀`,
    video: video1,
  },
  {
    TR: `Her vaka çekimsiz olmaz, olmamalı... Zira ortodontik problemlerin de bir matematiği var 🙂
    Bu hastamda sağ üst arka bölgeden 1 tane küçükazı dişin çekilmesi şarttı.  Çekilen dişin boşluğuna diğer dişler kaydırılarak her şeyi yerli yerine koyunca bu hanım hastam da rahatça gülmeye başladı.
    Her diş kıymetlidir ama bütünüyle kaymış bir üst çeneyi yerine almak için bu vakada çekim şarttı 👍`,
    EN: `Not every case is without extraction. Because orthodontic problems have a mathematical pattern too 🙂 In this case it was necessary to extract a tooth from upper right side. When the front teeth are orthodontically slided to the space gained by the extraction, my lady patient started to be able to smile comfortably. 
    Every tooth is precious but a totally shifted upper jaw requires an extraction to be nicely balanced in this case 👍`,
    video: video2,
  },
  {
    TR: `Vaka paylaşmaya devam 🙂 Bazen çenelerin birbiriyle ilişkisi normal olduğu halde dişlerin dizimindeki düzensizlikler görüntüyü bozmaya yeter. Dişler arasında diastema dediğimiz boşluklar ve ufak tefek seviye farkları çok göze batabilir. Gülümseme estetiğini sağlamak için bu problemlerin düzeltilmesi gerekir. İşte hastamın özel talebi üzerine yalnızca şikayetlerine odaklandığımız kısa süreli bir tedavinin sonucu...`,
    EN: `Let's continue sharing cases 🙂 Sometimes although the relation of the jaws are okay, malpositioning of the individual teeth is enough to ruin the appearance. The so called "diastema" which means gaps between teeth and other problems like unleveled teeth can draw so much unwanted attention. These problems must be fixed to  achieve an esthetic smile. Here is the result of a very short time treatment focused only for my patient's complaints...`,
    video: video5,
  },
  {
    TR: `Bu hastamda alt dişlerin üst dişlere göre geride olmasına bağlı sınıf II kapanış bozukluğu denen problem mevcuttu. Bazen dişlerde kayda değer bir çapraşıklık veya boşluk olmasa da, alt ve üst dişlerin biribirine göre konumlarında uyumsuzluk olabilir. Hastalar her zaman farkında olmasa da bu durum doğru bir ortodontik tedavide düzeltilmesi gereken en önemli parametrelerden biridir. Alt ve üst dişlerin doğru ilişkide kapanması sadece estetik için değil, tüm ağız ve yüz sağlığı için önemlidir. Hatta dil alanının kısıtlanmasına bağlı olarak nefes alma kolaylığını ve gece uykusunu dahi doğrudan etkiler.`,
    EN: `My patient here had his lower teeth positioned backwards which is called a Class II malocclusion case. Sometimes teeth are perfectly leveled and there is no crowding but the relative position of lower jaw to upper jaw is uncompatible. Not every patient can notice this but it is orthodontically a "must to fix" problem in order to achieve dental harmony and healthy functioning of the jaw joint. The correct positioning of the jaws is not only a matter of beauty but also it is important for patient's health. There is even an effect on the sleep quality due to obstruction of the airway by the tongue which is wrongly positioned because of the wrong jaw relations.`,
    video: video6,
  },
];

//Contact

export const buttonsUskudar = {
  TR: (
    <div className="grid grid-rows-2 grid-cols-2 xl:flex-row flex-col flex-wrap justify-center gap-2 w-full xl:w-fit xl:gap-4 items-center">
      <WhatsappContact className={"rounded-lg col-span-2 w-full"} />
      <BaseLink
        isLink={true}
        isBlank={true}
        to={
          "https://www.google.com.tr/maps/dir//uzm+dr+emre+metin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14cab967aec44b3b:0xdc8ec03df4aeac4c?sa=X&ved=2ahUKEwiohb2b_ez9AhX4SvEDHXbbCPEQ9Rd6BAhEEAU"
        }
        content={"Konumu\u00A0Gör"}
      />
      <BaseLink
        isLink={true}
        to={"/iletisim/randevu-talebi"}
        content={"Randevu\u00A0Al"}
      />
    </div>
  ),
  EN: (
    <div className="grid grid-rows-2 grid-cols-2 xl:flex-row flex-col flex-wrap justify-center gap-2 w-full xl:w-fit xl:gap-4 items-center">
      <WhatsappContact className={"rounded-lg col-span-2 w-full"} />
      <BaseLink
        isLink={true}
        isBlank={true}
        to={
          "https://www.google.com.tr/maps/dir//uzm+dr+emre+metin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14cab967aec44b3b:0xdc8ec03df4aeac4c?sa=X&ved=2ahUKEwiohb2b_ez9AhX4SvEDHXbbCPEQ9Rd6BAhEEAU"
        }
        content={"View\u00A0Location"}
      />
      <BaseLink
        isLink={true}
        to={"/contact/appointment-request"}
        content={"Make an Appointment"}
        className={"text-xs xl:text-lg"}
      />
    </div>
  ),
};

export const articlesUskudar = {
  TR: [
    "Buraya uğrayan herkesin gurur duyabileceği bir gülümsemeyle güvenle yaşamasını istiyorum. Profesyonel, eğlenceli, ilgili ve samimi bir ortamda her yaş için ortodontik tedavi sunuyoruz.",
    "Bir danışma randevusu alın - gelin ve bizimle tanışın!",
  ],
  EN: [
    "I want everyone who visits here to live safely with a smile they can be proud of. We offer orthodontic treatment for all ages in a professional, fun, caring and friendly environment.",
    "Make a consultation appointment - come and meet us!",
  ],
};

export const articlesUmraniye = {
  TR: ["Yeni kliniğim çok yakında açılacak!"],
  EN: ["My new clinic will be in service very soon!"],
};

export const contactInformation = {
  titles: {
    clinics: {
      EN: "Clinics",
      TR: "Klinikler",
    },
    contact: {
      EN: "Contact",
      TR: "İletişim",
    },
  },
  title: {
    EN: "Contact Information",
    TR: "İletişim Bilgileri",
  },
  article: {
    EN: ["Please do not hesitate to contact us."],
    TR: ["Lütfen iletişime geçmekten çekinmeyin."],
  },
  addresses: {
    EN: "",
    TR: "",
  },
  phoneNumbers: ["+905326543082"],
};

//Footer

export const footerData = {
  socialMedia: [
    {
      icon: "facebook",
      url: "https://www.facebook.com/emre.metin.798/",
      description: "see my facebook page",
    },
    {
      icon: "instagram",
      url: "https://www.instagram.com/ortodontistemremetin/",
      description: "see my instagram account",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/emre-metin-944493aa",
      description: "see my linkedIn account",
    },
  ],
  titles: {
    info: {
      EN: "Information",
      TR: "Bilgi",
    },
    clinics: {
      EN: "Clinics",
      TR: "Klinikler",
    },
    map: {
      EN: "Map",
      TR: "Harita",
    },
  },
  bottomInfo: {
    rights: {
      EN: "© 2025 Emre Metin | All rights reserved",
      TR: "© 2025 Emre Metin | Tüm hakları saklıdır",
    },
  },
};

//Navbar

export const links = {
  home: {
    EN: "Home",
    TR: "Ana Sayfa",
  },
  about: {
    EN: "About",
    TR: "Hakkımızda",
    patientSatisfaction: {
      EN: "Patient Satisfaction",
      TR: "Hasta Memnuniyeti",
    },
  },
  treatments: {
    EN: "Treatments",
    TR: "Tedaviler",
  },
  faq: {
    EN: "FAQ",
    TR: "Sık Sorulan Sorular",
  },
  contact: {
    EN: "Contact",
    TR: "İletişim",
    appointmentRequest: {
      EN: "Appointment",
      TR: "Randevu Talebi",
    },
  },
};

// About

export const aboutUs = {
  title: {
    EN: "About My Clinic",
    TR: "Kliniğim Hakkında",
  },
  article: {
    TR: (
      <div>
        <article className="container space-y-4 article-treatment">
          <p>
            Kendimi öncelikle saygın bir ortodontist diş hekimi olarak
            tanımlamak isterim. Ortodonti alanındaki uzmanlığımla, hastalarımın
            sağlıklı gülüşlere kavuşmasına ve kendilerini özgüvenle ifade
            etmelerine yardımcı olmaktan büyük mutluluk duyuyorum.
          </p>
          <p>
            Ümraniye'deki yeni kliniğim, son teknoloji ekipmanlarla donatılmış
            modern bir ortamda hizmet veriyor. Hastalarımın konforu ve güvenliği
            her zaman önceliğimdir. Uzmanlık alanımda sürekli güncellenen bilgi
            ve teknikleri takip ederek, en etkili ve kişiye özel tedavi planları
            sunarım.
          </p>
          <p>
            Her hasta için dikkatlice yapılan ön muayeneler ve detaylı teşhis
            süreçleri, en uygun tedavi yöntemini belirlememize yardımcı olur.
            Tedavi sürecinde hastalarıma açık iletişim ve bilgilendirme
            sağlayarak, onları tedavi sürecine dahil ederim.
          </p>
          <p>
            Kliniğimde sunduğumuz hizmetler arasında sabit braketler, şeffaf
            plaklar, estetik kaygılarını gideren özel tedaviler ve çocuklarda
            erken dönem ortodontik müdahaleler bulunmaktadır.{" "}
            <Link
              className="hover:underline italic font-extralight"
              to="/tedavi-cesitleri#treatments"
            >
              Tedavi hizmetleri hakkında bilgi almak için tıklayın.
            </Link>
          </p>
          <p>
            Sizin için daha sağlıklı ve güzel bir gülümseme için benimle
            iletişime geçmekten çekinmeyin.{" "}
            <Link
              className="hover:underline italic font-extralight"
              to="/iletisim"
            >
              {"İletişim >"}
            </Link>
          </p>
        </article>
      </div>
    ),
    EN: (
      <div>
        <article className="container space-y-4 article-treatment">
          <p>
            Let me introduce myself as a distinguished orthodontist and dentist.
            As an expert in orthodontics, I take immense pleasure in helping my
            patients achieve healthy smiles and express themselves confidently.
          </p>
          <p>
            My clinic provides services in a modern environment equipped with
            state-of-the-art facilities. Patient comfort and safety are always
            my top priorities. I stay up-to-date with the latest advancements in
            my field to offer the most effective and personalized treatment
            plans.
          </p>
          <p>
            Thorough preliminary examinations and detailed diagnostics are
            conducted for each patient, allowing us to determine the most
            suitable treatment approach. Throughout the treatment process, I
            maintain open communication and provide patients with essential
            information, ensuring their active involvement.
          </p>
          <p>
            Our range of services includes fixed braces, clear aligners,
            specialized treatments addressing aesthetic concerns, and early
            orthodontic interventions for children.
            <Link
              className="hover:underline italic font-extralight"
              to="/treatments#treatments"
            >
              {" Click to get information about treatment services."}
            </Link>
          </p>
          <p>
            Feel free to reach out to me for a healthier and more beautiful
            smile tailored just for you.
            <Link
              className="hover:underline italic font-extralight"
              to="/contact"
            >
              {" Click to Contact >"}
            </Link>
          </p>
        </article>
      </div>
    ),
  },
};

export const aboutMe = {
  title: {
    EN: "Dr. Med. Dent. Emre Metin",
    TR: "Uzm. Dr. Emre Metin",
  },
  article: {
    EN: (
      <article className="space-y-4 article-treatment">
        <p>
          I am a member of an almost entirely medical family. I chose dentistry
          as my profession not among many options such as engineering,
          architecture, and medicine, but rather as a clear preference for
          dentistry. Dentistry was a natural choice for me, considering my
          father's profession and the detailed education provided by the
          Semmelweis University, which has a history of 250 years and has
          produced Nobel laureates.
        </p>
        <p>
          During my high school years, due to my interest in biology and
          anatomy, I was accepted with a direct exemption by an international
          academic committee to a pre-medical college education lasting two
          years after high school in the United States and some European
          countries. I successfully spent five years at the faculty and
          graduated with the title of "dr.med.dent." My thesis focused on the
          comparison of synthetic and natural bone grafts.
        </p>
        <p>
          Having a globally recognized diploma from this university, I had the
          opportunity to continue my doctoral education without an exam.
          However, I decided to return to my home country to be close to my
          family and loved ones. My education in English gave me access to
          foreign resources both in my daily life and in professional
          terminology.
        </p>
        <p>
          Upon returning to Turkey, with the desire to continue my academic
          life, I participated in the Dentistry Specialty Examination (DUS)
          organized by the Council of Higher Education and ranked 16th in
          Turkey. I chose Selçuk Orthodontics due to its academic staff. My
          specialization thesis involved significant research, including
          clinical experiments, micro-tomography examinations, and 3D modeling
          analysis, to compare the effects of different forces used in
          orthodontics on root resorption.
        </p>
        <p>
          After successfully completing my thesis and specialization exam, I
          earned the title of specialist doctor. Following this, my husband, who
          is also a dentist, and I returned to my hometown, Üsküdar, and opened
          our own clinic. Currently, we provide services in orthodontics and
          general dentistry at our clinic in Üsküdar. I keep myself up-to-date
          with yearly innovations, applying treatments such as transparent
          aligners, mini-screws, and self-ligating braces. Orthodontics is such
          an interesting field where one needs to solve various biomechanical
          puzzles specific to each case while keeping aesthetics, art, and
          medical approach in mind. The satisfaction I feel when function,
          beauty, and health come together motivates me to work harder. As a
          result, I don't shy away from challenging cases, enjoy the details,
          and view my profession with great love, almost like a hobby.
        </p>
      </article>
    ),
    TR: (
      <article className="space-y-4 article-treatment">
        <p>
          Ben neredeyse tamamı hekim olan bir ailenin mensubuyum. Bu mesleği
          mühendislik, mimarlık, tıp gibi bir sürü seçenek arasındaki
          alternatiflerden biri olarak seçmedim. Diş hekimliği benim için net
          bir tercihti.
        </p>
        <p>
          Babamın da mesleği olan diş hekimliği hayatıma akademisyen dostlarımız
          ile yaptığımız araştırmalar sonucu alanında dünyadaki en detaylı
          eğitimi verdiğini öğrendiğim Nobel ödülleri olan 250 küsur yıllık
          Semmelweis Tıp Üniversitesi'nin çok kademeli teorik sınavlarına
          hazırlanarak başladım. Lise döneminde biyoloji ve anatomiye olan hobi
          seviyesindeki ilgim sebebiyle Amerika ve bazı Avrupa ülkelerinde lise
          sonrası, üniversite öncesi iki yıl süren premedikal kolej eğitimi için
          uluslararası akademisyen heyeti tarafından direk muafiyet alarak kabul
          edildiğim fakültemde başarılı 5 sene geçirerek "dr.med.dent" unvanıyla
          mezun oldum. Buradaki tezimin konusu, suni ve doğal kemik greftlerinin
          mukayesesi ile ilgiliydi.
        </p>
        <p>
          Dünyanın her yerinde diploma denkliği olan bu üniversitede sınavsız
          bir şekilde doktora eğitimine devam etme hakkı elde ettiğim halde
          hayatımın kalanında nerede yaşamak istediğim ile ilgili bir yol
          ayrımına geldiğimi fark ederek bir seçim yaptım ve aileme,
          sevdiklerime yakın olabilmek için ülkeme döndüm. Eğitimimin tamamı
          İngilizce olduğu için hem günlük kullanımda hem de mesleki
          terminolojiye hakimiyet açısından yabancı kaynaklara erişim imkanım
          oldukça artmıştı.
        </p>
        <p>
          Türkiye'ye döndükten sonra akademik hayatıma devam etmek istediğim
          için Yüksek Öğretim Kurumu'nun düzenlediği Diş Hekimliği Uzmanlık
          Sınavı'na (DUS) katılarak Türkiye 16.'sı oldum. Birkaç fakülteyi
          bizzat gidip gezdikten sonra Selçuk Ortodonti'nin akademik kadrosu
          beni cezbetti ve ilk tercihim olarak orayı belirledim. Uzmanlık
          tezimin konusu, ortodontide kullanılan farklı kuvvetlerin kök
          rezorpsiyonuna (erimesine) etkilerini mukayese etmek ile ilgili klinik
          deneyler, mikro tomografi incelemeleri ve 3 boyutlu modelleme analizi
          gibi üç temel aşaması olan önemli bir çalışmaydı. Zorlu bir süreç olsa
          da sonuçları itibariyle ortodontide ugulanan kuvvetler ile diş
          köklerinin zarar görmemesini gözetmek açısından mesleğime katkısı oldu
          diye düşünüyorum.
        </p>
        <p>
          Tezimi ve uzmanlık bitirme sınavını tamamlayarak uzman doktor unvanını
          kazandıktan sonra, kendisi de diş hekimi olan eşimle birlikte doğup
          büyüdüğüm memleketim Üsküdar'a dönüş yaptık. Şu an Üsküdar'daki
          kliniğimizde ben ortodonti alanında ve eşim genel diş hekimliği
          alanında hizmet veriyoruz. Akademik olarak her sene güncellenen
          yenilikleri hem yurt içi, hem yurt dışından takip ederek şeffaf
          plaklar, mini vidalar ve kapaklı braketler gibi tedavileri
          sentezleyerek uyguluyorum. Ortodonti öyle enteresan bir branş ki,
          vakaya özel farklı farklı biyomekanik bilmeceleri zihnen çözerken, bir
          yandan da estetik sanatları ve tıbbi yaklaşımı el üstünde tutmak
          gerekir. Sonuçta fonksiyon, güzellik ve sağlık birbirini
          tamamladığında duyulan mesleki tatmin insanı daha çok çalışmaya iter.
          Bu sebeple zorlu vakalardan kaçmıyor, detaylardan keyif alıyor, en
          önemlisi de mesleğimi adeta hobi olarak görüyor ve çok seviyorum.
        </p>
      </article>
    ),
  },
};

// Coming Soon

export const comingSoonData = {
  title: {
    EN: "Coming Soon!",
    TR: "Yakında!",
  },
  article: {
    EN: "You can make an appointment by calling us for now.",
    TR: "Şimdilik bizi arayarak randevu alabilirsiniz.",
  },
  callUs: {
    EN: "Click to Call!",
    TR: "Aramak İçin Tıklayın!",
  },
};

// Teeth Number

export const teethNumber = {
  title: {
    EN: "Find out the number of your tooth with discomfort",
    TR: "Rahatsızlığınızın Bulunduğu Dişinizin Numarasını Öğrenin",
  },
};

export const treatmentsData = {
  title: {
    EN: "Treatments",
    TR: "Tedaviler",
  },
  subTitle: {
    EN: (
      <h2 className="xl:small-title text-lg font-semibold text-sky-700 pb-4">
        Orthodontic Treatments and Their Different Types
      </h2>
    ),
    TR: (
      <h2 className="xl:small-title text-lg font-semibold text-sky-700 pb-4">
        Ortodontik Tedaviler ve Farklı Çeşitleri
      </h2>
    ),
  },
  article1: {
    TR: (
      <article className="space-y-4 article-treatment">
        <p>
          Ortodonti, dişlerin, çenelerin ve yüzün düzgün bir şekilde hizalanması
          ve uyumlu bir görünüm elde etmek amacıyla yapılan tedavilere odaklanan
          bir diş hekimliği dalıdır. Ortodontik tedaviler, çeşitli problemleri
          düzeltmeye ve sağlıklı bir gülümseme oluşturmaya yardımcı olur. Bu
          tedaviler, dişlerin kapanış bozukluklarını, çarpık dişleri, çeneler
          arası uyumsuzlukları ve dişlerdeki boşlukları düzeltmek için
          uygulanır.
        </p>
        <p>
          Ortodontik tedavilerin farklı çeşitleri vardır. Geleneksel braketler,
          telli apareyler ve elastik bantlar gibi malzemeler kullanarak dişleri
          hizalamak ve düzeltmek için yaygın olarak kullanılan sabit tedavi
          yöntemleridir. Şeffaf plaklar, yani alignerler, dişlerin hareketini
          düzenleyen ve çıkarılabilen tedavi seçeneklerindendir.
        </p>
      </article>
    ),
    EN: (
      <article className="space-y-4 article-treatment">
        <p>
          Orthodontics is a branch of dentistry that focuses on treatments
          aiming to align teeth, jaws, and face properly, achieving a harmonious
          appearance. Orthodontic treatments help to correct various dental
          issues and create a healthy smile. These treatments are applied to
          address problems such as misalignment of teeth, crowded teeth,
          malocclusions, and gaps between teeth.
        </p>
        <p>
          There are various types of orthodontic treatments. Traditional braces,
          using brackets, wires, and elastic bands, are commonly employed to
          align and correct teeth. Clear aligners, known as invisible braces,
          are removable treatment options that regulate tooth movement.
        </p>
      </article>
    ),
  },
  article2: {
    TR: (
      <article className="space-y-4 article-treatment">
        <p>
          Ayrıca, ortodonti tedavilerinde estetik kaygıları olan hastalar için
          şeffaf braketler ve beyaz renkli teller gibi özel estetik seçenekler
          de mevcuttur. Fonksiyonel apareyler, çene düzensizliklerini düzeltmek
          ve yüz simetrisini sağlamak için kullanılan başka bir tedavi türüdür.
        </p>
        <p>
          Ortodontik tedavilerin süresi kişiden kişiye değişebilir ve bazı
          durumlarda birkaç aydan birkaç yıla kadar sürebilir. Tedavi süresi,
          problem ve kompleksiteye bağlı olarak değişebilir. Tedaviden sonra
          düzenli takip kontrolleri ve koruyucu apareyler kullanımı, elde edilen
          sonuçların kalıcı olmasına yardımcı olur.
        </p>
        <p>
          Ortodonti tedavileri, daha sağlıklı bir ağız ve güzel bir gülümseme
          elde etmek için önemli bir adımdır. Uzman bir ortodontist tarafından
          yapılan doğru tedavi seçeneğiyle, hastalar güvenle gülümsemeye ve
          kendilerini daha iyi hissetmeye başlarlar.
        </p>
      </article>
    ),
    EN: (
      <article className="space-y-4 article-treatment">
        <p>
          For patients with aesthetic concerns, special options like clear
          braces and white-colored wires are available to blend in with the
          natural appearance of teeth. Functional appliances are another type of
          treatment used to correct jaw irregularities and achieve facial
          symmetry.
        </p>
        <p>
          The duration of orthodontic treatments can vary from individual to
          individual and may last from a few months to several years, depending
          on the complexity of the case. The treatment duration is influenced by
          the specific problem being addressed. After the treatment, regular
          follow-up appointments and the use of retainers contribute to
          maintaining the achieved results.
        </p>
        <p>
          Orthodontic treatments play a significant role in achieving a
          healthier mouth and a beautiful smile. With the right treatment option
          provided by an experienced orthodontist, patients can confidently
          smile and feel better about themselves.
        </p>
      </article>
    ),
  },
  EN: [
    {
      title: "Braces",
      textSummary:
        "It consists of brackets attached to the teeth and wires passed through the slots in the brackets.",
      iconName: "braces",
    },
    {
      title: "Aligners",
      textSummary:
        "Transparent, thin, plastic-like plaques are shaped according to the teeth of the person. Insertion and removal procedures are the responsibility of the patient.",
      iconName: "aligners",
    },
    {
      title: "Retainers",
      textSummary:
        "It is made of a removable, transparent, thin, slightly flexible and plastic-like material. They adapt exactly to the shape and placement of the teeth.",
      iconName: "retainers",
    },
    {
      title: "Archwires",
      textSummary:
        "The archwires fit into the slots in the brackets and move the teeth.",
      iconName: "archwires",
    },
    {
      title: "Elastics",
      textSummary:
        "Elastics are small rubber bands that apply extra force to a tooth or teeth in a way that braces alone cannot. This helps the teeth move into their ideal positions.",
      iconName: "elastics",
    },
    {
      title: "Mouthguard",
      textSummary:
        "Mouth guards are mostly used by athletes to protect teeth from impacts and trauma during competitive and some individual sports activities.",
      iconName: "mouthguard",
    },
    {
      title: "Orthodontic Surgery",
      textSummary:
        "Surgical orthodontics, also known as orthognathic surgery, is corrective jaw surgery to correct skeletal problems that affect the mouth and jaw abilities that may affect health and social life.",
      iconName: "surgery",
    },
  ],
  TR: [
    {
      title: "Diş Telleri",
      textSummary:
        "Dişlere takılan braketler ve braketlerdeki yuvalardan geçirilen tellerden oluşur.",
      iconName: "braces",
    },
    {
      title: "Aligner'lar",
      textSummary:
        "Bir kişinin dişlerine uyacak şekilde şekillendirilmiş şeffaf, ince, plastik benzeri plaklar. Takma ve çıkarma işlemleri hasta sorumluluğundadır.",
      iconName: "aligners",
    },
    {
      title: "Retainer'lar",
      textSummary:
        "Çıkarılabilir, şeffaf, ince, hafif esnek ve plastik benzeri bir malzemeden yapılmıştır. Dişlerin şekline ve yerleşimine tam olarak uyarlar.",
      iconName: "retainers",
    },
    {
      title: "Ark Telleri",
      textSummary:
        "Ark telleri braketlerdeki yuvalara oturur ve aslında dişleri hareket ettirir.",
      iconName: "archwires",
    },
    {
      title: "Lastikler",
      textSummary:
        "Lastikler, bir dişe veya dişlere tek başına diş tellerinin yapamayacağı şekilde ekstra kuvvet uygulayan küçük lastik bantlardır. Bu, dişlerin ideal konumlarına hareket etmesine yardımcı olur.",
      iconName: "elastics",
    },
    {
      title: "Ağız Koruyucu",
      textSummary:
        "Ağız koruyucu, her yaştan sporcu tarafından, rekabetçi ve bireysel spor aktiviteleri sırasında dişleri travmadan korumak için kullanılır.",
      iconName: "mouthguard",
    },
    {
      title: "Ortodontik Cerrahi",
      textSummary:
        "Ortognatik cerrahi olarak da adlandırılan cerrahi ortodonti, ısırma, çiğneme ve konuşma kabiliyetini etkileyen iskelet problemlerini düzeltmek için yapılan düzeltici çene cerrahisidir.",
      iconName: "surgery",
    },
  ],
  more: {
    EN: "See More",
    TR: "Daha Fazla",
  },
};

//faq

export const faqs = {
  TR: [
    {
      question: "Ortodonti nedir ne iş yapar?",
      answer: `Ortodonti, diş ve çene yapısındaki bozuklukların teşhis, önleme ve tedavisini inceleyen diş hekimliği dalıdır. Ortodonti uzmanları, dişlerin düzgün hizalanması, çenelerin uyumlu bir şekilde çalışması ve güzel bir gülümseme elde etmek için çeşitli apareyler ve tedavi yöntemleri kullanır. Braketler, tel takımları ve şeffaf plaklar gibi çeşitli cihazlar ortodontik tedavilerde yaygın olarak kullanılmaktadır.`,
    },
    {
      question: "Neden ortodontik tedavi görülmelidir?",
      answer:
        "Ortodontik tedavi, dişlerin ve çene yapısının düzeltilmesini sağlayan önemli bir dental tedavi yöntemidir. Doğru çene ve diş düzeni, estetik açıdan hoş bir gülümseme elde etmeye ve özgüveni artırmaya yardımcı olur. Aynı zamanda, düzgün hizalanmış dişler, çiğneme işlevini ve konuşmayı iyileştirirken, ağız sağlığını ve temizliğini korumayı kolaylaştırır. Ortodontik tedavi, diş ve çene problemlerini düzeltmeye yönelik uzun vadeli sağlık avantajları sunar.",
    },
    {
      question:
        "Ortodonti tedavilerinin çok pahalı olduğu söyleniyor, doğru mu?",
      answer:
        "Hayır, bazı tedavilerin ücreti ilk bakışta büyük bir meblağ gibi gözükse de bu meblağ sonucunda diş, ağız, çene sağlığınızda ve sosyal hayatınızda farkedilir bir iyileşme göreceksiniz. Hayatınızın sonuna kadar güzel bir gülüşe sahip olacak ve ileride karşınıza çıkabilecek diş hastalıkları ile diş ağrılarından kurtulacaksınız. Ödediğiniz meblağ sonucunda uzun bir süre boyunca periyodik olarak doktorlarımız ile birçok kez tedavi ve kontroller için görüşeceksiniz. Ayrıca taksit gibi ödeme kolaylığı sunacak seçeneklerimiz de mevcut. Ücret bilgisi almak ve bizden dişlerinizin detaylı analizini duymak için randevu alın!",
    },
    {
      question: "Diş teli takmak acı verir mi?",
      answer:
        "Hayır, elbette dişçi koltuğuna oturan her hastanın en büyük endişesi 'Acı hissedecek miyim?' dir.\n Fakat diş teli takılırken herhangi bir acı ya da ağrı hissetmezsiniz.",
    },
    {
      question: "Çocuklar ilk defa ne zaman ortodontik kontrolden geçmelidir?",
      answer:
        "Çocuklar, diş gelişimleri ve kemik yapısı göz önünde bulundurularak, genellikle 6-7 yaş arasında ilk ortodontik kontrol için diş hekimine götürülmelidir. Bu yaş aralığı, çocukların süt dişlerinin dökülmeye başladığı ve kalıcı dişlerin gelmeye başladığı döneme denk gelir. Erken yaşta yapılan ortodontik kontroller, olası diş ve çene problemlerinin erken tespit edilmesini sağlar ve tedavi süreçlerini kolaylaştırır.",
    },
    {
      question: "Kimler ortodontik tedavi görebilir?",
      answer:
        "Kemiklerin sağlıklı olması durumunda yaş sınırı olmadan çocuk, ergen, yetişkin veya ileri yaş dahil her yaşa özel farklı tedavi seçenekleri sayesinde günümüzde 7'den 70'e diyebileceğimiz bir yaş aralığında kişiye özel ortodontik tedavi yapılabilmektedir.",
    },
  ],
  EN: [
    {
      question: "What is orthodontics?",
      answer: `Orthodontics is a branch of dentistry that focuses on the diagnosis, prevention, and treatment of dental and jaw irregularities. Orthodontists use various appliances and treatment methods to achieve proper alignment of teeth, harmonious functioning of jaws, and a beautiful smile. Commonly used devices in orthodontic treatments include braces, wires, and clear aligners such as Invisalign.`,
    },
    {
      question: "Why should orthodontic treatment be seen?",
      answer:
        "Orthodontic treatment is essential as it helps correct the alignment of teeth and jaw structure. Proper jaw and dental alignment contribute to a pleasing smile aesthetically, boosting self-confidence. Additionally, well-aligned teeth improve chewing function, speech, and facilitate easier maintenance of oral health and hygiene. Orthodontic treatment offers long-term health benefits by addressing dental and jaw issues effectively.",
    },
    {
      question:
        "It is said that orthodontic treatments are very expensive, is it true?",
      answer:
        "No, although the cost of some treatments may seem like a large amount at first glance, you will see a noticeable improvement in your teeth, mouth, jaw health and social life as a result of this amount. You will have a beautiful smile for the rest of your life and you will get rid of dental diseases and toothaches that may occur in the future. As a result of the amount you pay, you will periodically meet with our doctors for treatment and check-ups many times over a long period of time. We also have options that will offer ease of payment such as installments. Make an appointment to get price information and hear a detailed analysis of your teeth from us!",
    },
    {
      question: "Is it painful to wear braces?",
      answer:
        "No, of course, the biggest concern of every patient sitting in the dental chair is 'Will I feel pain?\n But you will not feel any pain while wearing braces.",
    },
    {
      question: "When should children have their first orthodontic checkup?",
      answer:
        "Children should have their first orthodontic evaluation around the age of 6-7, considering their dental development and bone structure. This age range coincides with the time when children start to lose their baby teeth and their permanent teeth begin to erupt. Early orthodontic check-ups allow potential dental and jaw issues to be detected early, facilitating the treatment process.",
    },
    {
      question: "Who can receive orthodontic treatment?",
      answer:
        "If the bones are healthy, individual orthodontic treatment can be performed in an age range from 7 to 70, thanks to different treatment options for all ages, including children, adolescents, adults or advanced age, without age limit.",
    },
  ],
};
