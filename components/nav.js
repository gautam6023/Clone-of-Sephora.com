//Catching nav data
let navData = document.getElementById("nav");

//Function to import export nav data
const nav = () => {
  return navData.innerHTML;
  return `
  <div id="navFirst">
    <div style="color: #fff" id="navText">
      <strong>Take 50% off++</strong> Oh snap! Get major savings on your
      favorite beauty. Plus, free shipping on all orders with code
      <strong>FREESHIP.</strong> <strong>Shop Now</strong> ▸
    </div>
    <div id="navImg-con">
      <img
        src="https://www.sephora.com/contentimages/homepage/081721/Homepage/DesktopMweb/2021-08-29-hp-top-banner-project-kickball-d-us-slice.jpeg?"
        alt=""
      />
    </div>
  </div>
  <div id="navSecond">
    <div id="navSecondElements">
      <div id="logo" class="flex">
        <a href="#"
          ><img
            src="https://www.sephora.com/img/ufe/logo.svg"
            alt=""
            height="100%"
            width="100%"
        /></a>
      </div>
      <div id="navSearch" class="flex">
        <input type="text" name="search" id="search" placeholder="Search" />
      </div>
      <div id="navOptions" class="flex">
        <div id="buttons">
          <div>
            <!-- first -->
            <a href="#" class="flex">
              <img
                class="icon"
                src="https://www.sephora.com/img/ufe/icons/stores.svg"
                alt=""
              />
              <span>
                <p class="inText">Stores & Services</p>
                <p>Choose Your Store</p>
              </span>
            </a>
            <!-- second -->
            <a href="#" class="flex">
              <img
                class="icon"
                src="	https://www.sephora.com/img/ufe/icons/community.svg"
                alt=""
              />
              <span>
                <p class="inText">Community</p>
              </span>
            </a>
            <!-- third -->
            <a href="#" class="flex" id="signIn">
              <img
                class="icon"
                src="https://www.sephora.com/img/ufe/icons/me32.svg"
                alt=""
              />
              <span>
                <p class="inText">Sign in</p>
              </span>

              <!-- Sign in starts div here -->
              <div id="popupSignIn">
                <div id="hovMainDiv">
                  <div class="btyDIV">
                    <div>
                      <img
                        src="https://community.sephora.com/t5/image/serverpage/avatar-name/default-avatar/avatar-theme/sephora/avatar-collection/sephora/avatar-display-size/profile/version/4"
                        id="beauty"
                      />
                    </div>
                    <div id="paraDiv">
                      <p id="bold">Good afternoon, Beautiful. 👋</p>
                      <p>Sign in for a more personalized experience</p>
                    </div>
                  </div>
                  <div class="btnFlx">
                    <button>Sign In</button>
                    <button>Create Account</button>
                  </div>
                </div>
                <div class="mainListDiv">
                  <div class="firstFlx">
                    <div>
                      <p>Beauty Insider Summary</p>
                      <p>View activity, savings, benefits</p>
                    </div>
                    <div>
                      <img
                        id="logoOFsepgora"
                        src="https://www.sephora.com/img/ufe/bi/logo-bi-stacked.svg"
                      />
                    </div>
                  </div>
                  <div class="secondFlx">
                    <p>Rewards Bazaar</p>
                    <p>Redeem items, samples, more</p>
                  </div>
                  <div class="listFlx">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/subscription.svg"
                      />
                    </div>
                    <div>
                      <p>Buy it Again</p>
                      <p>Reorder from in-store and online purchases</p>
                    </div>
                  </div>
                  <div class="listFlx">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/track.svg"
                      />
                    </div>
                    <div>
                      <p>Orders</p>
                      <p>View & track online or pickup orders</p>
                    </div>
                  </div>
                  <div class="listFlx">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/heart.svg"
                      />
                    </div>
                    <div>
                      <p>Loves</p>
                      <p>View saved Products</p>
                    </div>
                  </div>
                  <div class="listFlx">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/account.svg"
                      />
                    </div>
                    <div>
                      <p>Account Settings</p>
                      <p>Payment, contact info, addresses, password</p>
                    </div>
                  </div>
                  <div class="listFlx">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                      />
                    </div>
                    <div>
                      <p>Sephora Credit Card Program</p>
                      <p>Apply now</p>
                    </div>
                  </div>
                  <div class="listFlx">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/flash.svg"
                      />
                    </div>
                    <div>
                      <p>Flash</p>
                      <p>Unlimited 1-2 Day Shipping Subscription</p>
                    </div>
                  </div>
                  <div class="listFlx">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/reservations.svg"
                      />
                    </div>
                    <div>
                      <p>Reservations</p>
                      <p>Manage your services, classes, events</p>
                    </div>
                  </div>
                  <div class="listFlx">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/traits.svg"
                      />
                    </div>
                    <div>
                      <p>Beauty Traits and Color iQ</p>
                      <p>
                        Complete your beauty traits for personalized
                        recommendations
                      </p>
                    </div>
                  </div>
                  <div class="listFlx">
                    <div>
                      <img
                        src="https://www.sephora.com/img/ufe/icons/recommendations.svg"
                      />
                    </div>
                    <div>
                      <p>Beauty Advisor Recommendations</p>
                      <p>Recommendations from your store visits</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- sign in div ends here -->
            </a>
          </div>
        </div>
        <div id="icon2">
          <!-- chat -->
          <a href="#" class="iconHover">
            <span>
              <!-- <i class="fa-regular fa-comment color"></i> -->
              <img src="./image/comment-block-svgrepo-com.svg" alt=""
              class="iconUser" " />
            </span>
          </a>
          <!-- whishlist -->
          <a href="#" class="iconHover">
            <span>
              <!-- <i class="fa-regular fa-heart color"></i> -->
              <img src="./image/heart.png" alt="" class="iconUser" />
            </span>
          </a>
          <!-- cart -->
          <a href="#" class="iconHover">
            <span>
              <!-- <i class="fa-solid fa-basket-shopping color"></i> -->
              <img
                src="./image/shopping-basket.png"
                alt=""
                class="iconUser"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="navThird">
    <ul id="navThirdList">
      <!-- Items -->
      <li class="nav-item">
        <a href="#">New</a>
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <!-- Sub-Items -->

        <div class="sub-items cat1">
          <div class="sub-list">
            <ul>
              <li><a href="#" id="a">All New</a></li>
              <li><a href="#">Just Dropped</a></li>
              <li><a href="#">New Makeup</a></li>
              <li><a href="#">New Skincare</a></li>
              <li><a href="#">New Haircare</a></li>
              <li><a href="#">New Fragrance</a></li>
              <li><a href="#">New Bath & Body</a></li>
              <li><a href="#">New Tools & Brushes</a></li>
            </ul>

            <ul>
              <li><a href="#">The Next Big Thing</a></li>
              <li><a href="#">Bestsellers</a></li>
              <li><a href="#">Allure Best Of Beauty</a></li>
              <li><a href="#">Quizzes & Buying Guides</a></li>
              <li><a href="#">Clean Beauty Guide</a></li>
            </ul>
          </div>
          <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2022-feb-lip-story-site-desktop-global-navigation-button-us.jpg?imwidth=294"
              alt=""
            />
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2022-02-01-feb-hair-mbc-site-desktop-global-navigation-button.jpg?imwidth=294"
              alt=""
            />
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Brands</a>
        <!-- sub-items -->
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <div class="sub-items">
          <div class="sub-list">
            <ul>
              <li>
                <a href="#" id="a"><strong>Brands A-Z</strong></a>
              </li>
              <li>
                <a href="#"
                  ><strong><u>SEPHORA COLLECTION</u></strong></a
                >
              </li>
              <li>
                <a href="#"><strong>New Brands</strong></a>
              </li>
              <li><a href="#">Dame Products</a></li>
              <li><a href="#">RANAVAT</a></li>
              <li><a href="#">GXVE Beauty</a></li>
              <li><a href="#">Chris Collins</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Only At Sephora</strong></a>
              </li>
              <li><a href="#">Tatcha</a></li>
              <li><a href="#">Dr.Dennis Gross Skincare</a></li>
              <li><a href="#">The 7 Virtues</a></li>
              <li><a href="#">HUDA BEUTY</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Affordable Brands</strong></a>
              </li>
              <li><a href="#">SEPHORA COLLECTOINS</a></li>
              <li><a href="#">The Ordinary</a></li>
              <li><a href="#">The Inkey List</a></li>
              <li><a href="#">Verb</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Black-Owned Brands</strong></a>
              </li>
              <li><a href="#">adwoa beuty</a></li>
              <li><a href="#">PATTERN by Tracee Ellis</a></li>
              <li><a href="#">Briogeo</a></li>
              <li><a href="#">Shani Darden Skin Care</a></li>
            </ul>
          </div>
          <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
              alt=""
            />
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Makeup</a>

        <!-- sub-items -->
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <div class="sub-items">
          <div class="sub-list">
            <ul>
              <li>
                <a href="#" id="a"><strong>All Makeup</strong></a>
              </li>
              <li>
                <a href="#"><br /></a>
              </li>
              <li>
                <a href="#"><strong>Face</strong></a>
              </li>
              <li><a href="#">Foundation</a></li>
              <li><a href="#">BB & CC Creams</a></li>
              <li><a href="#">Tinted Mosturizer</a></li>
              <li><a href="#">Concealer</a></li>
              <li><a href="#">Face Primer</a></li>
              <li><a href="#">Setting spray & Powdwr</a></li>
              <li><a href="#">Hifhlighter</a></li>
              <li><a href="#">Contour</a></li>
              <li><a href="#">Color Correct</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Eye</strong></a>
              </li>
              <li><a href="#">Mascara</a></li>
              <li><a href="#">Eye Palettes</a></li>
              <li><a href="#">Eyeliner</a></li>
              <li><a href="#">Eyebrow</a></li>
              <li><a href="#">False Eyelashes</a></li>
              <li><a href="#">Eyelash Serums</a></li>
              <li><a href="#">Eye Primer</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Lip</strong></a>
              </li>
              <li><a href="#">Lipstic</a></li>
              <li><a href="#">Lip Gloss</a></li>
              <li><a href="#">Lip Stain</a></li>
              <li><a href="#">Lip Liner</a></li>
              <li><a href="#">Lip Plumber</a></li>
              <li><a href="#">Lip Sets</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Cheek</strong></a>
              </li>
              <li><a href="#">Blush</a></li>
              <li><a href="#">Bronzer</a></li>
              <li><a href="#">Cheek Palettes</a></li>
              <li>
                <a href="#"><strong>Value & Gift Sets</strong></a>
              </li>
              <li>
                <a href="#"><strong>Makeup Palettes</strong></a>
              </li>
              <li><a href="#">Brushes & Applications</a></li>
              <li><a href="#">Accessorises</a></li>
              <li><a href="#">Nails</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Cheek</strong></a>
              </li>
              <li><a href="#">Blush</a></li>
              <li><a href="#">Bronzer</a></li>
              <li><a href="#">Cheek Palettes</a></li>
              <li>
                <a href="#"><strong>Value & Gift Sets</strong></a>
              </li>
              <li>
                <a href="#"><strong>Makeup Palettes</strong></a>
              </li>
              <li><a href="#">Brushes & Applications</a></li>
              <li><a href="#">Accessorises</a></li>
              <li><a href="#">Nails</a></li>
            </ul>
            <ul>
              <li>
                <a href="#"><strong>New</strong></a>
              </li>
              <li>
                <a href="#"><strong>Bestsellers</strong></a>
              </li>
              <li>
                <a href="#"><strong>Clean Makeup</strong></a>
              </li>
              <li>
                <a href="#"><strong>Vegan Makeup</strong></a>
              </li>
              <li>
                <a href="#"><strong>Mini Size</strong></a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"><strong>Help Me Choose</strong></a>
              </li>
              <li><a href="#">Foundation Quiz</a></li>
              <li><a href="#">Lip Quiz</a></li>
              <li><a href="#">Brow Quiz</a></li>
              <li>
                <a href="#">Complexion Routine Builder</a>
              </li>
              <li>
                <a href="#">Guide to Foundations</a>
              </li>
              <li><a href="#">Clean Makeup Guide</a></li>
              <li><a href="#">No Makeup Makeup</a></li>
            </ul>
          </div>
          <!-- <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
              alt=""
            />
          </div> -->
        </div>
      </li>

      <li class="nav-item">
        <a href="#">Skincare</a>
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <div class="sub-items">
          <div class="sub-list">
            <ul>
              <li>
                <a href="#" id="a"><strong>All Skincare</strong></a>
              </li>
              <li>
                <a href="#"><br /></a>
              </li>
              <li>
                <a href="#"><strong>Moisturizers</strong></a>
              </li>
              <li><a href="#">Night Creams</a></li>
              <li><a href="#">Face Oils</a></li>
              <li><a href="#">Mists & Essences</a></li>
              <li><a href="#">BB & CC Creams</a></li>
              <li><a href="#">Face Wash & Cleanser</a></li>
              <li><a href="#">Exfoliators</a></li>
              <li><a href="#">Makeup Removers</a></li>
              <li><a href="#">Toners</a></li>
              <li><a href="#">Face Wipes</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Treatments</strong></a>
              </li>
              <li><a href="#">Face Serums</a></li>
              <li><a href="#">Treatments</a></li>
              <li><a href="#">Eyeliner</a></li>
              <li><a href="#">Eyebrow</a></li>
              <li><a href="#">Facial Peelsty</a></li>
              <li>
                <a href="#"><strong>Masks</strong></a>
              </li>
              <li><a href="#">Face Masks</a></li>
              <li><a href="#">Sheet Masks</a></li>
              <li><a href="#">Eye Masks</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Sunscreen</strong></a>
              </li>
              <li><a href="#">Face Sunscreen</a></li>
              <li><a href="#">Body Sunscreen</a></li>
              <li>
                <a href="#"><strong>High Tech Tools</strong></a>
              </li>
              <li>
                <a href="#"><strong>Wellness</strong></a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Shop by Concern</strong></a>
              </li>
              <li><a href="#">Acne & Blemishes</a></li>
              <li><a href="#">Anti-Aging</a></li>
              <li><a href="#">Dark Spots</a></li>
              <li>
                <a href="#"><strong>Pores </strong></a>
              </li>
              <li>
                <a href="#"><strong>Dryness</strong></a>
              </li>
              <li><a href="#">Brushes & Applications</a></li>
              <li><a href="#">Fine Lines & Wrinkles</a></li>
              <li><a href="#">Duliness</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>New</strong></a>
              </li>
              <li>
                <a href="#"><strong>Bestsellers</strong></a>
              </li>
              <li>
                <a href="#"><strong>Clean Skincare</strong></a>
              </li>
              <li>
                <a href="#"><strong>Vegan Skincare</strong></a>
              </li>
              <li>
                <a href="#"><strong>Value & Gift Sets</strong></a>
              </li>
              <li>
                <a href="#"><strong>Mini Size</strong></a>
              </li>
              <li>
                <a href="#"><strong>Sephora Collection</strong></a>
              </li>
              <li>
                <a href="#"><strong>Luxury Skincare</strong></a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"><strong>Help Me Choose</strong></a>
              </li>
              <li>
                <a href="#"><strong>Skincare Quiz</strong></a>
              </li>
              <li>
                <a href="#"><strong>Skincare Ingredients</strong></a>
              </li>
              <li>
                <a href="#"><strong>Best Skincare Under $35</strong></a>
              </li>
              <li>
                <a href="#"><strong>Skincare by Age</strong></a>
              </li>
              <li>
                <a href="#"><strong>Skincare for Your Skin</strong></a>
              </li>
              <li>
                <a href="#"><strong>Allure Best of Beauty</strong></a>
              </li>
              <li>
                <a href="#"><strong>Skincare</strong></a>
              </li>
            </ul>
          </div>
          <!-- <div class="sub-img">
              <img
                src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
                alt=""
              />
            </div> -->
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Hair</a>
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <!-- sub-items -->

        <div class="sub-items">
          <div class="sub-list">
            <ul>
              <li>
                <a href="#" id="a"><strong>All Makeup</strong></a>
              </li>
              <li>
                <a href="#"><br /></a>
              </li>
              <li>
                <a href="#"><strong>Face</strong></a>
              </li>
              <li><a href="#">Foundation</a></li>
              <li><a href="#">BB & CC Creams</a></li>
              <li><a href="#">Tinted Mosturizer</a></li>
              <li><a href="#">Concealer</a></li>
              <li><a href="#">Face Primer</a></li>
              <li><a href="#">Setting spray & Powdwr</a></li>
              <li><a href="#">Hifhlighter</a></li>
              <li><a href="#">Contour</a></li>
              <li><a href="#">Color Correct</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Eye</strong></a>
              </li>
              <li><a href="#">Mascara</a></li>
              <li><a href="#">Eye Palettes</a></li>
              <li><a href="#">Eyeliner</a></li>
              <li><a href="#">Eyebrow</a></li>
              <li><a href="#">False Eyelashes</a></li>
              <li><a href="#">Eyelash Serums</a></li>
              <li><a href="#">Eye Primer</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Lip</strong></a>
              </li>
              <li><a href="#">Lipstic</a></li>
              <li><a href="#">Lip Gloss</a></li>
              <li><a href="#">Lip Stain</a></li>
              <li><a href="#">Lip Liner</a></li>
              <li><a href="#">Lip Plumber</a></li>
              <li><a href="#">Lip Sets</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Cheek</strong></a>
              </li>
              <li><a href="#">Blush</a></li>
              <li><a href="#">Bronzer</a></li>
              <li><a href="#">Cheek Palettes</a></li>
              <li>
                <a href="#"><strong>Value & Gift Sets</strong></a>
              </li>
              <li>
                <a href="#"><strong>Makeup Palettes</strong></a>
              </li>
              <li><a href="#">Brushes & Applications</a></li>
              <li><a href="#">Accessorises</a></li>
              <li><a href="#">Nails</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Cheek</strong></a>
              </li>
              <li><a href="#">Blush</a></li>
              <li><a href="#">Bronzer</a></li>
              <li><a href="#">Cheek Palettes</a></li>
              <li>
                <a href="#"><strong>Value & Gift Sets</strong></a>
              </li>
              <li>
                <a href="#"><strong>Makeup Palettes</strong></a>
              </li>
              <li><a href="#">Brushes & Applications</a></li>
              <li><a href="#">Accessorises</a></li>
              <li><a href="#">Nails</a></li>
            </ul>
            <ul>
              <li>
                <a href="#"><strong>New</strong></a>
              </li>
              <li>
                <a href="#"><strong>Bestsellers</strong></a>
              </li>
              <li>
                <a href="#"><strong>Clean Makeup</strong></a>
              </li>
              <li>
                <a href="#"><strong>Vegan Makeup</strong></a>
              </li>
              <li>
                <a href="#"><strong>Mini Size</strong></a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#"><strong>Help Me Choose</strong></a>
              </li>
              <li><a href="#">Foundation Quiz</a></li>
              <li><a href="#">Lip Quiz</a></li>
              <li><a href="#">Brow Quiz</a></li>
              <li>
                <a href="#">Complexion Routine Builder</a>
              </li>
              <li>
                <a href="#">Guide to Foundations</a>
              </li>
              <li><a href="#">Clean Makeup Guide</a></li>
              <li><a href="#">No Makeup Makeup</a></li>
            </ul>
          </div>
          <!-- <div class="sub-img">
          <img
            src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
            alt=""
          />
        </div> -->
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Fragrance</a>
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <!-- sub-items -->

        <div class="sub-items">
          <div class="sub-list">
            <ul>
              <li>
                <a href="#" id="a"><strong>Brands A-Z</strong></a>
              </li>
              <li>
                <a href="#"
                  ><strong><u>SEPHORA COLLECTION</u></strong></a
                >
              </li>
              <li>
                <a href="#"><strong>New Brands</strong></a>
              </li>
              <li><a href="#">Dame Products</a></li>
              <li><a href="#">RANAVAT</a></li>
              <li><a href="#">GXVE Beauty</a></li>
              <li><a href="#">Chris Collins</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Only At Sephora</strong></a>
              </li>
              <li><a href="#">Tatcha</a></li>
              <li><a href="#">Dr.Dennis Gross Skincare</a></li>
              <li><a href="#">The 7 Virtues</a></li>
              <li><a href="#">HUDA BEUTY</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Affordable Brands</strong></a>
              </li>
              <li><a href="#">SEPHORA COLLECTOINS</a></li>
              <li><a href="#">The Ordinary</a></li>
              <li><a href="#">The Inkey List</a></li>
              <li><a href="#">Verb</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Black-Owned Brands</strong></a>
              </li>
              <li><a href="#">adwoa beuty</a></li>
              <li><a href="#">PATTERN by Tracee Ellis</a></li>
              <li><a href="#">Briogeo</a></li>
              <li><a href="#">Shani Darden Skin Care</a></li>
            </ul>
          </div>
          <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
              alt=""
            />
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Tools & Brush</a>
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <!-- sub Items -->
        <div class="sub-items">
          <div class="sub-list">
            <ul>
              <li>
                <a href="#" id="a"><strong>All Makeup</strong></a>
              </li>
              <li>
                <a href="#"><br /></a>
              </li>
              <li>
                <a href="#"><strong>Face</strong></a>
              </li>
              <li><a href="#">Foundation</a></li>
              <li><a href="#">BB & CC Creams</a></li>
              <li><a href="#">Tinted Mosturizer</a></li>
              <li><a href="#">Concealer</a></li>
              <li><a href="#">Face Primer</a></li>
              <li><a href="#">Setting spray & Powdwr</a></li>
              <li><a href="#">Hifhlighter</a></li>
              <li><a href="#">Contour</a></li>
              <li><a href="#">Color Correct</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Eye</strong></a>
              </li>
              <li><a href="#">Mascara</a></li>
              <li><a href="#">Eye Palettes</a></li>
              <li><a href="#">Eyeliner</a></li>
              <li><a href="#">Eyebrow</a></li>
              <li><a href="#">False Eyelashes</a></li>
              <li><a href="#">Eyelash Serums</a></li>
              <li><a href="#">Eye Primer</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Lip</strong></a>
              </li>
              <li><a href="#">Lipstic</a></li>
              <li><a href="#">Lip Gloss</a></li>
              <li><a href="#">Lip Stain</a></li>
              <li><a href="#">Lip Liner</a></li>
              <li><a href="#">Lip Plumber</a></li>
              <li><a href="#">Lip Sets</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Cheek</strong></a>
              </li>
              <li><a href="#">Blush</a></li>
              <li><a href="#">Bronzer</a></li>
              <li><a href="#">Cheek Palettes</a></li>
              <li>
                <a href="#"><strong>Value & Gift Sets</strong></a>
              </li>
              <li>
                <a href="#"><strong>Makeup Palettes</strong></a>
              </li>
              <li><a href="#">Brushes & Applications</a></li>
              <li><a href="#">Accessorises</a></li>
              <li><a href="#">Nails</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Cheek</strong></a>
              </li>
              <li><a href="#">Blush</a></li>
              <li><a href="#">Bronzer</a></li>
              <li><a href="#">Cheek Palettes</a></li>
              <li>
                <a href="#"><strong>Value & Gift Sets</strong></a>
              </li>
              <li>
                <a href="#"><strong>Makeup Palettes</strong></a>
              </li>
              <li><a href="#">Brushes & Applications</a></li>
              <li><a href="#">Accessorises</a></li>
              <li><a href="#">Nails</a></li>
            </ul>
            <ul>
              <li>
                <a href="#"><strong>New</strong></a>
              </li>
              <li>
                <a href="#"><strong>Bestsellers</strong></a>
              </li>
              <li>
                <a href="#"><strong>Clean Makeup</strong></a>
              </li>
              <li>
                <a href="#"><strong>Vegan Makeup</strong></a>
              </li>
              <li>
                <a href="#"><strong>Mini Size</strong></a>
              </li>
            </ul>
          </div>
          <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-pro-brushes-site-desktop-global-navigation-button.jpg?imwidth=294"
              alt=""
            />
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Bath & Body</a>
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <!-- subItems -->
        <div class="sub-items cat1">
          <div class="sub-list">
            <ul>
              <li><a href="#" id="a">All New</a></li>
              <li><a href="#">Just Dropped</a></li>
              <li><a href="#">New Makeup</a></li>
              <li><a href="#">New Skincare</a></li>
              <li><a href="#">New Haircare</a></li>
              <li><a href="#">New Fragrance</a></li>
              <li><a href="#">New Bath & Body</a></li>
              <li><a href="#">New Tools & Brushes</a></li>
            </ul>

            <ul>
              <li><a href="#">The Next Big Thing</a></li>
              <li><a href="#">Bestsellers</a></li>
              <li><a href="#">Allure Best Of Beauty</a></li>
              <li><a href="#">Quizzes & Buying Guides</a></li>
              <li><a href="#">Clean Beauty Guide</a></li>
            </ul>
          </div>
          <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2020-9-14-site-desktop-global-navigation-button-banner-sol-de-janeiro.jpg?imwidth=294"
              alt=""
            />
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Mini Size</a>

        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <!-- subItems -->
        <div class="sub-items cat1">
          <div class="sub-list">
            <ul>
              <li><a href="#" id="a">All New</a></li>
              <li><a href="#">Just Dropped</a></li>
              <li><a href="#">New Makeup</a></li>
              <li><a href="#">New Skincare</a></li>
              <li><a href="#">New Haircare</a></li>
              <li><a href="#">New Fragrance</a></li>
              <li><a href="#">New Bath & Body</a></li>
              <li><a href="#">New Tools & Brushes</a></li>
            </ul>

            <ul>
              <li><a href="#">The Next Big Thing</a></li>
              <li><a href="#">Bestsellers</a></li>
              <li><a href="#">Allure Best Of Beauty</a></li>
              <li><a href="#">Quizzes & Buying Guides</a></li>
              <li><a href="#">Clean Beauty Guide</a></li>
            </ul>
          </div>
          <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-site-global-navigation-button-evergreen-crossworld-minis.jpg?imwidth=294"
              alt=""
            />
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294"
              alt=""
            />
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Gifts</a>
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <!-- sub-items -->

        <div class="sub-items">
          <div class="sub-list">
            <ul>
              <li>
                <a href="#" id="a"><strong>All Gifts</strong></a>
              </li>
              <li>
                <a href="#"><strong>Gift Cards</strong></a>
              </li>
              <li>
                <a href="#"><strong>Value & Gift Sets</strong></a>
              </li>
              <li>
                <a href="#"><br /></a>
              </li>
              <li>
                <a href="#"><strong>By Price</strong></a>
              </li>
              <li><a href="#">$10 and under</a></li>
              <li><a href="#">$15 and under</a></li>
              <li><a href="#">$25 and under</a></li>
              <li><a href="#">$50 and under</a></li>
              <li><a href="#">$70 and under</a></li>
              <li><a href="#">$100 and under</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>By Category</strong></a>
              </li>
              <li><a href="#">Makeup</a></li>
              <li><a href="#">Skincare </a></li>
              <li><a href="#"> Hair </a></li>
              <li><a href="#">Fragrance</a></li>
              <li><a href="#">Candles & Home Scents</a></li>
              <li><a href="#">Tools</a></li>
              <li><a href="#">Brush Sets & Accessories</a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>By Recipient</strong></a>
              </li>
              <li><a href="#">For Her</a></li>
              <li><a href="#">For Him</a></li>
              <li><a href="#">For Teenagers</a></li>
              <li><a href="#">For Them </a></li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Top Rated Gifts</strong></a>
              </li>
              <li>
                <a href="#"><strong>Mini Size</strong></a>
              </li>
              <li>
                <a href="#"><strong></strong></a>
              </li>
              <li>
                <a href="#"><strong>Only at Sephora</strong></a>
              </li>
              <li>
                <a href="#"><strong>Luxury</strong></a>
              </li>
              <li>
                <a href="#"><strong>Makeup Palettes</strong></a>
              </li>
            </ul>
          </div>
          <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-gift-card.jpg?imwidth=294"
              alt=""
            />
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Beauty Under $20</a>
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <!-- sub-items -->

        <div class="sub-items">
          <div class="sub-list">
            <ul>
              <li>
                <a href="#" id="a"><strong>Makeup Under $20</strong></a>
              </li>
              <li>
                <a href="#"><strong>Skincare Under $20</strong></a>
              </li>
              <li>
                <a href="#"><strong>Hair Under $20</strong></a>
              </li>

              <li>
                <a href="#"><strong>Fragrance Under $20</strong></a>
              </li>
              <li>
                <a href="#"><strong>Tools & Brushes Under $20</strong></a>
              </li>
              <li>
                <a href="#"><strong>Bath & Body Under $20</strong></a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#"
                  ><strong>Sephora Collection Under s20</strong></a
                >
              </li>
              <li><a href="#">Makeup</a></li>
              <li><a href="#">Skincare </a></li>
              <li><a href="#"> Hair </a></li>
              <li><a href="#">Candles & Home Scents</a></li>
              <li><a href="#">Tools & Brushes</a></li>
              <li><a href="#">Value & Gift Sets</a></li>
              <li><a href="#">Clean Beauty</a></li>
            </ul>
          </div>
          <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2022-01-13-sc-bbd-mascara-site-desktop-global-navigation-button.jpg?imwidth=294"
              alt=""
            />
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="#">Sale & Offers</a>
        <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
        <!-- sub-items -->

        <div class="sub-items">
          <div class="sub-list">
            <ul>
              <li>
                <a href="#" id="a"><strong>All Sale</strong></a>
              </li>
              <li>
                <a href="#"><strong>Makeup</strong></a>
              </li>
              <li>
                <a href="#"><strong>Skincare</strong></a>
              </li>

              <li>
                <a href="#"><strong>Haircare</strong></a>
              </li>
              <li>
                <a href="#"><strong>Tools & Brushes</strong></a>
              </li>
              <li>
                <a href="#"><strong>Bath & Body</strong></a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#"><strong>Beauty Offers </strong></a>
              </li>
            </ul>
          </div>
          <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294"
              alt=""
            />
            <img
              src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-beauty-offers-abundance.jpg?imwidth=294"
              alt=""
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
`;
};

export { nav };
