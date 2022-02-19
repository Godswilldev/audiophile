// yx1-earphones
import yx1Desktop from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import yx1EarphoneMobile from "../assets/product-yx1-earphones/mobile/image-product.jpg";
import yx1EarphoneTablet from "../assets/product-yx1-earphones/tablet/image-product.jpg";

import yx1CategoryImageMobile from "../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import yx1CategoryImageTablet from "../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1CategoryImageDesktop from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

import yx1GalleryFirstMobile from "../assets/product-yx1-earphones/mobile/image-gallery-1.jpg";
import yx1GalleryFirstTablet from "../assets/product-yx1-earphones/tablet/image-gallery-1.jpg";
import yx1GalleryFirstDesktop from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";

import yx1GallerySecondMobile from "../assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import yx1GallerySecondTablet from "../assets/product-yx1-earphones/tablet/image-gallery-2.jpg";
import yx1GallerySecondDesktop from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";

import yx1GalleryThirdMobile from "../assets/product-yx1-earphones/mobile/image-gallery-3.jpg";
import yx1GalleryThirdTablet from "../assets/product-yx1-earphones/tablet/image-gallery-3.jpg";
import yx1GalleryThirdDesktop from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";

// Others
import zx9SpeakerOthersDesktop from "../assets/shared/desktop/image-zx9-speaker.jpg";
import zx7SpeakerOthersDesktop from "../assets/shared/desktop/image-zx7-speaker.jpg";
import xx99MarkOneHeadphonesOthersDesktop from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx99MarkTwoHeadPhonesOthersDesktop from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import xx59HeadphonesOthersDesktop from "../assets/shared/desktop/image-xx59-headphones.jpg";

// xx59 Headphones
import xx59HeadphonesDesktop from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import xx59GalleryThirdDesktop from "../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";
import xx59GalleryFirstDesktop from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import xx59GallerySecondDesktop from "../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import xx59CategoryImageDesktop from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

// xx99 mark one headphones
import xx99MarkOneHeadphoneDesktop from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx99CategoryImageDesktop from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99GalleryFirstDesktop from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import xx99GallerySecondDesktop from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import xx99GalleryThirdDesktop from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

// xx99MarkTwoHeadphones
import xx99MarkTwoHeadPhonesDesktop from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import xx99MarkTwoCategoryImageDesktop from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99MartTwoGalleryFirstDesktop from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import xx99MartTwoGallerySecondDesktop from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import xx99MartTwoGalleryThirdDesktop from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

// zx7SpeakerMarkTwoHeadphones
import zx7SpeakerDesktop from "../assets/product-zx7-speaker/desktop/image-product.jpg";
import zx7SpeakerCategoryImageDesktop from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx7SpeakerGalleryFirstDesktop from "../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import zx7SpeakerGallerySecondDesktop from "../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import zx7SpeakerGalleryThirdDesktop from "../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";

// zx9SpeakerMarkTwoHeadphones
import zx9SpeakerDesktop from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import zx9SpeakerCategoryImageDesktop from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx9SpeakerGalleryFirstDesktop from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import zx9SpeakerGallerySecondDesktop from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import zx9SpeakerGalleryThirdDesktop from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";

const data = [
  {
    id: 1,
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    image: {
      mobile: yx1EarphoneMobile,
      tablet: yx1EarphoneTablet,
      desktop: yx1Desktop,
    },
    category: "earphones",
    categoryImage: {
      mobile: yx1CategoryImageMobile,
      tablet: yx1CategoryImageTablet,
      desktop: yx1CategoryImageDesktop,
    },
    new: true,
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    including: [
      {
        quantity: 2,
        item: "Earphone unit",
      },
      {
        quantity: 6,
        item: "Multi-size earplugs",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "USB-C charging cable",
      },
      {
        quantity: 1,
        item: "Travel pouch",
      },
    ],

    gallery: {
      first: {
        mobile: yx1GalleryFirstMobile,
        tablet: yx1GalleryFirstTablet,
        desktop: yx1GalleryFirstDesktop,
      },
      second: {
        mobile: yx1GallerySecondMobile,
        tablet: yx1GallerySecondTablet,
        desktop: yx1GallerySecondDesktop,
      },
      third: {
        mobile: yx1GalleryThirdMobile,
        tablet: yx1GalleryThirdTablet,
        desktop: yx1GalleryThirdDesktop,
      },
    },

    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: xx99MarkOneHeadphonesOthersDesktop,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: xx59HeadphonesOthersDesktop,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: zx9SpeakerOthersDesktop,
        },
      },
    ],
  },
  {
    id: 2,
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    image: {
      mobile: "./assets/product-xx59-headphones/mobile/image-product.jpg",
      tablet: "./assets/product-xx59-headphones/tablet/image-product.jpg",
      desktop: xx59HeadphonesDesktop,
    },
    category: "headphones",
    categoryImage: {
      mobile:
        "./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
      tablet:
        "./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
      desktop: xx59CategoryImageDesktop,
    },

    new: false,
    price: 899,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    including: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earbuds",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
    ],
    gallery: {
      first: {
        mobile: "./assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
        tablet: "./assets/product-xx59-headphones/tablet/image-gallery-1.jpg",
        desktop: xx59GalleryFirstDesktop,
      },
      second: {
        mobile: "./assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
        tablet: "./assets/product-xx59-headphones/tablet/image-gallery-2.jpg",
        desktop: xx59GallerySecondDesktop,
      },
      third: {
        mobile: "./assets/product-xx59-headphones/mobile/image-gallery-3.jpg",
        tablet: "./assets/product-xx59-headphones/tablet/image-gallery-3.jpg",
        desktop: xx59GalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
          desktop: xx99MarkTwoHeadPhonesOthersDesktop,
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: xx99MarkOneHeadphonesOthersDesktop,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: zx9SpeakerOthersDesktop,
        },
      },
    ],
  },
  {
    id: 3,
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    image: {
      mobile:
        "./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
      tablet:
        "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
      desktop: xx99MarkOneHeadphoneDesktop,
    },
    category: "headphones",
    categoryImage: {
      mobile:
        "./assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
      tablet:
        "./assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
      desktop: xx99CategoryImageDesktop,
    },
    new: false,
    price: 1750,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is including with a balanced gold connector.",
    including: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earbuds",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
    ],
    gallery: {
      first: {
        mobile:
          "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg",
        tablet:
          "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg",
        desktop: xx99GalleryFirstDesktop,
      },
      second: {
        mobile:
          "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg",
        tablet:
          "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg",
        desktop: xx99GallerySecondDesktop,
      },
      third: {
        mobile:
          "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg",
        tablet:
          "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg",
        desktop: xx99GalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
          desktop: xx99MarkTwoHeadPhonesOthersDesktop,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: xx59HeadphonesOthersDesktop,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: zx9SpeakerOthersDesktop,
        },
      },
    ],
  },
  {
    id: 4,
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    image: {
      mobile:
        "./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
      tablet:
        "./assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
      desktop: xx99MarkTwoHeadPhonesDesktop,
    },
    category: "headphones",
    categoryImage: {
      mobile:
        "./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
      tablet:
        "./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
      desktop: xx99MarkTwoCategoryImageDesktop,
    },
    new: true,
    price: 2999,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium earbuds, these headphones deliver superior comfort for those who like to enjoy endless listening. It including intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    including: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earbuds",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
      {
        quantity: 1,
        item: "Travel bag",
      },
    ],
    gallery: {
      first: {
        mobile:
          "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
        tablet:
          "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
        desktop: xx99MartTwoGalleryFirstDesktop,
      },
      second: {
        mobile:
          "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
        tablet:
          "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
        desktop: xx99MartTwoGallerySecondDesktop,
      },
      third: {
        mobile:
          "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
        tablet:
          "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
        desktop: xx99MartTwoGalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: xx99MarkOneHeadphonesOthersDesktop,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: xx59HeadphonesOthersDesktop,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: zx9SpeakerOthersDesktop,
        },
      },
    ],
  },
  {
    id: 5,
    slug: "zx7-speaker",
    name: "ZX7 Speaker",
    image: {
      mobile: "./assets/product-zx7-speaker/mobile/image-product.jpg",
      tablet: "./assets/product-zx7-speaker/tablet/image-product.jpg",
      desktop: zx7SpeakerDesktop,
    },
    category: "speakers",
    categoryImage: {
      mobile:
        "./assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
      tablet:
        "./assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
      desktop: zx7SpeakerCategoryImageDesktop,
    },
    new: false,
    price: 3500,
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    including: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 7.5m audio cable",
      },
      {
        quantity: 1,
        item: "7.5m optical cable",
      },
    ],
    gallery: {
      first: {
        mobile: "./assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
        tablet: "./assets/product-zx7-speaker/tablet/image-gallery-1.jpg",
        desktop: zx7SpeakerGalleryFirstDesktop,
      },
      second: {
        mobile: "./assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
        tablet: "./assets/product-zx7-speaker/tablet/image-gallery-2.jpg",
        desktop: zx7SpeakerGallerySecondDesktop,
      },
      third: {
        mobile: "./assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
        tablet: "./assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
        desktop: zx7SpeakerGalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: zx9SpeakerOthersDesktop,
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: xx99MarkOneHeadphonesOthersDesktop,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: xx59HeadphonesOthersDesktop,
        },
      },
    ],
  },
  {
    id: 6,
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    image: {
      mobile: "./assets/product-zx9-speaker/mobile/image-product.jpg",
      tablet: "./assets/product-zx9-speaker/tablet/image-product.jpg",
      desktop: zx9SpeakerDesktop,
    },
    category: "speakers",
    categoryImage: {
      mobile:
        "./assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
      tablet:
        "./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
      desktop: zx9SpeakerCategoryImageDesktop,
    },
    new: true,
    price: 4500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    including: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 10m audio cable",
      },
      {
        quantity: 1,
        item: "10m optical cable",
      },
    ],
    gallery: {
      first: {
        mobile: "./assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
        tablet: "./assets/product-zx9-speaker/tablet/image-gallery-1.jpg",
        desktop: zx9SpeakerGalleryFirstDesktop,
      },
      second: {
        mobile: "./assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
        tablet: "./assets/product-zx9-speaker/tablet/image-gallery-2.jpg",
        desktop: zx9SpeakerGallerySecondDesktop,
      },
      third: {
        mobile: "./assets/product-zx9-speaker/mobile/image-gallery-3.jpg",
        tablet: "./assets/product-zx9-speaker/tablet/image-gallery-3.jpg",
        desktop: zx9SpeakerGalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
          mobile: "./assets/shared/mobile/image-zx7-speaker.jpg",
          tablet: "./assets/shared/tablet/image-zx7-speaker.jpg",
          desktop: zx7SpeakerOthersDesktop,
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: xx99MarkOneHeadphonesOthersDesktop,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: xx59HeadphonesOthersDesktop,
        },
      },
    ],
  },
];

export default data;
