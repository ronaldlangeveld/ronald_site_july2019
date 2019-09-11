import React, {useState, useEffect} from 'react';
import { Link, navigate } from "gatsby";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux';

function Auth(props) {

  const Shioritjie = {
    en: {
      title: {
        home: "PixelSnap 2 for macOS",
        buy: "PixelSnap 2 – Buy",
        upgrade: "PixelSnap 2 – Upgrade from PixelSnap 1",
        lost: "PixelSnap 2 – Lost your license?",
        faq: "PixelSnap 2 – Frequently Asked Question",
        changelog: "PixelSnap 2 – Changelog"
      },
      meta: [
        {
          name: "description",
          content: "PixelSnap - The fastest tool for measuring anything on your screen for macOS. Measure stuff like a PRO!"
        },
        {
          property: "og:description",
          content: "The fastest tool for measuring anything on your screen."
        }
      ],
      menu: {
        changelog: "Changelog",
        lost: "Lost your license",
        faq: "FAQ",
        contact: "Contact us"
      },
      button: {
        buy: "Buy now",
        buy2: "Buy PixelSnap 2",
        video: "Watch the video",
        upgrade: "Get discount",
        lost: "Find my license",
        newsletter: "Subscribe"
      },
      input: {
        email: "Your e-mail"
      },
      header: {
        tagline: "The fastest tool for measuring anything on your screen"
      },
      moneyback: {
        title: "30-Day Money-Back Guarantee",
        content: "We back every sale with a 30-day money back guarantee. If&nbsp;you're somehow not happy with your purchase, just <a class=`link` href=`mailto:contact@maketheweb.pl`>let&nbsp;us&nbsp;know</a>."
      },
      introduction: {
        label: "New version. Better experience.",
        title: "PixelSnap 2<br/>is up to <span class=`gradient-fill`>2x faster</span>``",
        content: "Completely rewritten from scratch, the new version provides a truly magical experience. Measuring things has never been faster or more enjoyable!",
        changes: "Check out 30+ changes",
        version1: "Version 1",
        version2: "Version 2",
        explanation: "Time required to detect and measure an object"
      },
      changesModal: {
        features: {
          title: "New Features",
          list1: [
            "Snappable guides",
            "Hold distance on the screen",
            "Multiple object measurement",
            "CleanShot integration",
            "Adobe XD integration",
            "Screenshot tool for taking screenshots of measurements",
            "Customize all shortcuts",
            "Added onboarding tutorial",
            "Touchbar support"
          ],
          list2: [
            "Select object without snapping (with right drag)",
            "Move rectangle by pressing space",
            "Find dimensions by pressing dock icon",
            "Mojave support",
            "Downscale retina screenshots to 1x",
            "Hide the icon from the menubar",
            "Show/Hide units",
            "Show/Hide cursor",
            "Auto contrast"
          ]
        },
        enhancements: {
          title: "Enhancements",
          list1: [
            "Completely rewritten from scratch",
            "Much faster measurements",
            "UI & UX improvements",
            "Improved Sketch Integration",
            "Improved Retina support"
          ],
          list2: [
            "Cancel selecting an object by pressing esc",
            "Improved activation process",
            "Smaller menubar icon"
          ]
        },
        fixes: {
          title: "Bug fixes",
          list1: [
            "Fixed bug with big screen resolution",
            "Fixed bug with sending screenshots via Apple Mail.app",
            "Fixed bug with moving cursor by arrows",
            "Fixed bug with selecting small objects"
          ],
          list2: [
            "Fixed bug with retina screenshots",
            "Fixed blurry cursor on Mojave",
            "Fixed moving/resizing out of screen bounds",
            "Fixed memory leaks",
            "Other minor bug fixes"
          ]
        }
      },
      features: {
        heading: "Works everywhere. In&nbsp;every&nbsp;app.",
        description: "PixelSnap works on the whole screen, across all apps, and you can <span class=`bold`>measure anything.</span>",
        distance: {
          title: "Measure distance",
          description: "Quickly get the distance between any elements on your screen",
          highlight1: "Hold dimensions on the screen",
          highlight2: "Copy to clipboard"
        },
        objects: {
          title: "Measure objects",
          description: "Instantly find the boundaries of any object by simply dragging an area around it",
          highlight1: "Magically snaps to the object",
          highlight2: "Measure multiple objects at once"
        },
        guides: {
          title: "Add snappable guides",
          description: "Check alignment by adding horizontal and vertical guides on the screen",
          highlight1: "Displays distance between guides",
          highlight2: "Snaps to screen elements"
        },
        screenshots: {
          title: "Take screenshots",
          description: "Export your measurements as an image and easily collaborate with others",
          highlight1: "Save selected area",
          highlight2: "Integrated with CleanShot"
        },
        cleanshot: {
          title: "Take better screenshots with CleanShot",
          description: "Supercharge your workflow with the most convenient screenshot tool",
          more: "Learn more"
        },
        crosshair: {
          title: "Crosshair mode",
          description: "Instantly check alignment of all the items on your screen"
        },
        tolerance: {
          title: "Tolerance mode",
          description: "Adjust tolerance to work with shadows and low contrast elements"
        }
      },
      darkFeatures: {
        shortcuts: {
          title: "Keyboard shortcuts",
          description: "Set a global hotkey and adjust all other shortcuts to your needs."
        },
        appearance: {
          title: "Change appearance",
          description: "Choose between light and dark mode and adjust the colors."
        },
        lightweight: {
          title: "Lightweight",
          description: "Our app is incredibly fast and offers high performance!"
        },
        retina: {
          title: "Retina ready",
          description: "The app supports Retina and works with multiple displays."
        },
        touchbar: {
          title: "We support your Touch Bar",
          description: "Accessing crucial actions has never been easier."
        }
      },
      integration: {
        title: "Integrates with your favorite tools",
        description: "PixelSnap shows real dimensions regardless of the displayed zoom level.",
        soon: "Coming soon"
      },
      testimonials: {
        title: "Feedback",
        description: "Our users love PixelSnap. Here's what they are saying:",
        reviews: {
          boag: "A tool that measures screen elements seems too basic to improve on. However, PixelSnap 2 adds features I didn’t even know I needed. An incredible aid to my workflow and definitely worth the upgrade.",
          blechinger: "Wonderful tool for quickly taking measure of just about anything. I especially love the functionality of snapping a rectangle around an object of your screen. Super handy!",
          witkowski: "PixelSnap is the missing ingredient in the toolkit of any UI engineer or designer. I use it multiple times each day and can't imagine a Mac without it. Speed up your workflow with this high quality app, you won't regret it!",
          lobanovskiy: "Super clever idea and very much needed tool in the world of UI designer. Honestly, it exceeded my expectation, flawless in every way.",
          pandya: "I've been working primarily on web products for the last 3 years where being able to reliably measure things on the screen is such an underrated need. PixelSnap does that so well and is now low-key my favorite utility app.",
          smith: "PixelSnap has been such a great tool for quickly spot checking size & space when working closely with a development team. I really appreciate its ability to maintain scale when zooming on an object in Sketch, and being able to grab individual items into a screenshot after snapping.",
          coyier: "PixelSnap is one of those apps that, once you see it, you're like OMG that's the best idea ever. Instant purchase for me."
        }
      },
      rating: {
        info: "According to <a class=`link` href=`https://www.producthunt.com/posts/pixelsnap/reviews` target=`_blank`>Product Hunt</a>"
      },
      buyWidget: {
        label: "Take measuring to the next level!",
        title: "Get PixelSnap 2",
        description: "Don't hesitate, we have a 30-day money-back guarantee."
      },
      newsletter: {
        title: "Be the first to know",
        description: "We'll inform you about new apps and deals, but no spam, we promise."
      },
      lost: {
        title: "Lost your license?",
        description: "Enter your email address and we'll help you recover it."
      },
      buy: {
        title: "Buy PixelSnap 2",
        description: "macOS {macos_version} or later required — Version {version}",
        tab1: "Buy a new license",
        tab1_mobile: "Buy",
        tab2: "Upgrade from PixelSnap 1",
        tab2_mobile: "Upgrade",
        variants: {
          1: "1 Mac",
          2: "2 Macs",
          5: "5 Macs",
          10: "10 Macs",
          15: "15 Macs"
        },
        save: "save {amount}",
        info: "By downloading or using the app, you are agreeing to our <a class=`link` href=`/EULA.pdf` target=`_blank`>EULA</a>. Prices in USD. VAT may apply."
      },
      upgrade: {
        discount50: "Get a 50% discount",
        discount50_description: "if you bought before <span class=`bold`>{date}</span>",
        free: "Get a free upgrade",
        free_description: "if you bought after <span class=`bold`>{date}</span>"
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "Where can I find my license?",
            answer: "After a successful purchase, you get an email from Gumroad with the receipt and your unique license key. Make sure to also check your Spam folder. If you still can’t find it, go to the <a href=`{lost_link}`>lost your license</a> page and follow the instructions."
          },
          {
            question: "Where can I get an invoice for my purchase?",
            answer: "You can generate an invoice yourself using the <strong>Generate</strong> button at the bottom of your email with your receipt which you receive after a successful purchase."
          },
          {
            question: "How can I re-download the app?",
            answer: "The download button is located in the receipt email you received from Gumroad. If you can't find it, go to the <a href=`{lost_link}`>lost your license</a> page and follow the instructions to retrieve it."
          },
          {
            question: "Is there a trial version?",
            answer: "We don’t provide a trial, but we do have a <strong>30-day money-back guarantee</strong> so feel free to give the app a try. If it doesn't meet your expectations, just <a href=`mailto:contact@maketheweb.pl`>let us know</a> and you’ll get a full refund."
          },
          {
            question: "Does PixelSnap work with every design software?",
            answer: "Yes, PixelSnap works on the whole screen, across all apps on your Mac! Moreover, some apps like <strong>Sketch</strong> or <strong>Adobe XD</strong> have full integration with our app, meaning that PixelSnap will show real dimensions regardless of the displayed zoom level."
          },
          {
            question: "Is there a student discount?",
            answer: "We are committed to helping students and that’s why we offer a 30% educational discount. In order to get the discount, just <a href=`mailto:contact@maketheweb.pl`>contact us</a> from your edu-issued email address."
          },
          {
            question: "Is there a discount for PixelSnap 1 users?",
            answer: "Customers who bought the previous version of PixelSnap <strong>after {date}</strong> are eligible for a free upgrade. If you made the purchase before this date, you’ll get a 50% discount. You can upgrade your license on the <a href=`{buy_link}`>Buy page</a>."
          },
          {
            question: "Does PixelSnap work on Windows?",
            answer: "There’s no Windows version and at the moment there are no plans on releasing one."
          },
          {
            question: "How to transfer my license to a different Mac?",
            answer: "All you need to do is activate the app on your new Mac with your license key. The old machine will be automatically deactivated."
          },
          {
            question: "Is CleanShot required to take screenshots?",
            answer: "No, you don’t have to have <a href=`{cleanshot_link}` target=`_blank`>CleanShot</a> in order to take screenshots with PixelSnap, but the integration does give you all the benefits such as Quick Access Overlay or built-in annotating. More information on all the features is available on the <a href=`{cleanshot_link}` target=`_blank`>CleanShot website</a>."
          }
        ]
      }
    }
  }
  
  const newJson = JSON.stringify(Shioritjie)
  const parse = JSON.parse(newJson)
  console.log(parse)

    const [isLogged, setLogged] = useState(true)

    useEffect(() => {

        if(isLogged === false){
            navigate('/blog')
        }
       

    }, [isLogged]);

    const Login = () => {
        alert("Logging out")
        setLogged(false)
    }

  return (
<>
{newJson}

</>
  );
}


export default Auth;
