const data = {
    title: "Theme Styleguide",
    version: "1.0.0",
    url: "#",
    favicon: "logo-32x32.png",
    resources: [
        {
            type: 'stylesheet',
            src: process.env.GATSBY_MAIN_STYLESHEET,
        },
        {
            type: 'stylesheet',
            src: 'https://fonts.googleapis.com/css?family=Oxygen:300,400,700',
        },
    ],
    sections: [
        {
            title: "Colors",
            type: "colors",
            groups: [
                {
                    title: "Theme Colors (Color Palette)",
                    options: [
                        {
                            title: "Mine Shaft",
                            subtitle: "Typography",
                            properties: {
                                color: "#333333"
                            }
                        },
                        {
                            title: "Shark",
                            subtitle: "Icons, Promo Banner, Inactive Menu Tabs, Tertiary Buttons",
                            properties: {
                                color: "#282b30"
                            }
                        },
                        {
                            title: "Abbey",
                            subtitle: "Testimonial Containers",
                            properties: {
                                color: "#45474b"
                            }
                        },
                        {
                            title: "Alabaster",
                            subtitle: "Container Fills",
                            properties: {
                                color: "#fafafa"
                            }
                        },
                        {
                            title: "Mercury",
                            subtitle: "Borders",
                            properties: {
                                color: "#e6e6e6"
                            }
                        },
                        {
                            title: "Valencia",
                            subtitle: "Primary Button",
                            properties: {
                                color: "#d43238"
                            }
                        },
                        {
                            title: "Bright Red",
                            subtitle: "Primary button hover and border",
                            properties: {
                                color: "#b00000"
                            }
                        },
                        {
                            title: "Crimson",
                            subtitle: "Selected radio button and checkbox fills",
                            properties: {
                                color: "#ea252e"
                            }
                        },
                        {
                            title: "Nevada",
                            subtitle: "Secondary button hover and border",
                            properties: {
                                color: "#6c6d70"
                            }
                        },
                        {
                            title: "Porcelain",
                            subtitle: "Flyout Fills",
                            properties: {
                                color: "#f0f1f2"
                            }
                        },
                        {
                            title: "Green",
                            subtitle: "Success Alerts",
                            properties: {
                                color: "#006400"
                            }
                        },
                        {
                            title: "Alert",
                            subtitle: "Error and Validation",
                            properties: {
                                color: "#e02B27"
                            }
                        },
                        {
                            title: "Brown",
                            subtitle: "General Alert Text Color (default)",
                            properties: {
                                color: "#6f4400"
                            }
                        },
                        {
                            title: "Silver",
                            subtitle: "Form Border Color (default)",
                            subtitl: "e02b27",
                            properties: {
                                color: "#c2c2c2"
                            }
                        },
                        {
                            title: "Yellow",
                            subtitle: "General Alert background color (default)",
                            properties: {
                                color: "#fdf0d5"
                            }
                        },
                    ]
                },
                {
                    title: "Base Colors",
                    options: [
                        {
                            title: "Primary",
                            properties: {
                                color: "var(--color-primary)"
                            }
                        },
                        {
                            title: "Secondary",
                            properties: {
                                color: "var(--color-secondary)"
                            }
                        },
                        {
                            title: "Light Gray",
                            properties: {
                                color: "var(--color-light-grey)"
                            }
                        },
                        {
                            title: "Medium Gray",
                            properties: {
                                color: "var(--color-medium-grey)"
                            }
                        },
                        {
                            title: "Dark Gray",
                            properties: {
                                color: "var(--color-dark-grey)"
                            }
                        },
                        {
                            title: "Default Borders",
                            properties: {
                                color: "var(--color-border)"
                            }
                        },
                        {
                            title: "Form Input Border",
                            properties: {
                                color: ""
                            }
                        },
                        {
                            title: "Text Color",
                            properties: {
                                color: "var(--text-color)"
                            }
                        },
                    ]
                },
            ]
        },
        {
            title: "Typography",
            type: "typography",
            groups: [
                {
                    title: "Headings",
                    options: [
                        {
                            title: "H1",
                            subtitle: "Page Title",
                            html: "This is an H1",
                            properties: {
                                'font-family': "var(--h1-font-family)",
                                'font-size': "var(--h1-font-size)",
                                'font-size--desktop': "var(--h1-font-size-desktop)",
                                'line-height': "var(--h1-line-height)",
                                'line-height--desktop': "var(--h1-line-height-desktop)",
                                'letter-spacing': "var(--h1-letter-spacing)",
                                'letter-spacing--desktop': "var(--h1-letter-spacing-desktop)",
                                'font-weight': "var(--h1-font-weight)",
                                'color': 'var(--color-text)',
                            }
                        },
                        {
                            title: "H1",
                            subtitle: "Page title on product detail page",
                            class: "page-title product",
                            html: `This is a PDP H1`,
                            properties: {
                                'font-family': "var(--h1-font-family)",
                                'font-size': "var(--product-title-font-size)",
                                'font-size--desktop': "var(--product-title-font-size-desktop)",
                                'line-height': "var(--product-title-line-height)",
                                'line-height--desktop': "var(--product-title-line-height-desktop)",
                                'letter-spacing': "var(--product-title-letter-spacing)",
                                'letter-spacing--desktop': "var(--product-title-letter-spacing-desktop)",
                                'font-weight': "var(--product-title-font-weight)",
                                'color': 'var(--color-text)',
                            }
                        },
                        {
                            title: "H2",
                            subtitle: "Checkout Subtitles, CMS Subtitles, Account Subtitles",
                            html: "This is an H2",
                            properties: {
                                'font-family': "var(--h2-font-family)",
                                'font-size': "var(--h2-font-size)",
                                'font-size--desktop': "var(--h2-font-size-desktop)",
                                'line-height': "var(--h2-line-height)",
                                'line-height--desktop': "var(--h2-line-height-desktop)",
                                'letter-spacing': "var(--h2-letter-spacing)",
                                'letter-spacing--desktop': "var(--h2-letter-spacing-desktop)",
                                'font-weight': "var(--h2-font-weight)",
                                'color': 'var(--color-text)',
                            }
                        },
                        {
                            title: "H3",
                            subtitle: "Category Filter headline",
                            html: "This is an H3",
                            properties: {
                                'font-family': "var(--h3-font-family)",
                                'font-size': "var(--h3-font-size)",
                                'font-size--desktop': "var(--h3-font-size-desktop)",
                                'line-height': "var(--h3-line-height)",
                                'line-height--desktop': "var(--h3-line-height-desktop)",
                                'letter-spacing': "var(--h3-letter-spacing)",
                                'letter-spacing--desktop': "var(--h3-letter-spacing-desktop)",
                                'font-weight': "var(--h3-font-weight)",
                                'color': 'var(--color-text)',
                            }
                        },
                        {
                            title: "H4",
                            subtitle: "Account Tertiary Titles, Cart and Checkout Summary Tertiary titles, Related products/Cross-sell/Upsell titles",
                            html: "This is an H4",
                            properties: {
                                'font-family': "var(--h4-font-family)",
                                'font-size': "var(--h4-font-size)",
                                'font-size--desktop': "var(--h4-font-size-desktop)",
                                'line-height': "var(--h4-line-height)",
                                'line-height--desktop': "var(--h4-line-height-desktop)",
                                'letter-spacing': "var(--h4-letter-spacing)",
                                'letter-spacing--desktop': "var(--h4-letter-spacing-desktop)",
                                'font-weight': "var(--h4-font-weight)",
                                'color': 'var(--color-text)',
                            }
                        },
                        {
                            title: "H5",
                            subtitle: "Navigation, Accordion Title",
                            html: "This is an H5",
                            properties: {
                                'font-family': "var(--h5-font-family)",
                                'font-size': "var(--h5-font-size)",
                                'font-size--desktop': "var(--h5-font-size-desktop)",
                                'line-height': "var(--h5-line-height)",
                                'line-height--desktop': "var(--h5-line-height-desktop)",
                                'letter-spacing': "var(--h5-letter-spacing)",
                                'letter-spacing--desktop': "var(--h5-letter-spacing-desktop)",
                                'font-weight': "var(--h5-font-weight)",
                                'color': 'var(--color-text)',
                            }
                        },
                        {
                            title: "H6",
                            subtitle: "Generic h6",
                            html: "This is an H6",
                            properties: {
                                'font-family': "var(--h6-font-family)",
                                'font-size': "var(--h6-font-size)",
                                'font-size--desktop': "var(--h6-font-size-desktop)",
                                'line-height': "var(--h6-line-height)",
                                'line-height--desktop': "var(--h6-line-height-desktop)",
                                'letter-spacing': "var(--h6-letter-spacing)",
                                'letter-spacing--desktop': "var(--h6-letter-spacing-desktop)",
                                'font-weight': "var(--h6-font-weight)",
                                'color': 'var(--color-text)',
                            }
                        }
                    ]
                },
                {
                    title: "Body",
                    options: [
                        {
                            title: "Body",
                            html: `<p>MidAtlantic Orthodontics is a family owned company with a culture that derives directly from our core values. These <a href="#">core values</a> are what drive out policies and business practices. they are the foundation of our relationships with our customers and, in turn, the community that we are all <a href="#">contributing</a> member towards. Since 1994, these principles have served to make MidAtlantic Orthodontics the reputable, full service provider of quality products and services we have been known for, and is consistent with the vision Mr. Tony Prusich had when starting the company.</p>`,
                            properties: {
                                'font-size': 'var(--font-size)',
                                'font-size--desktop': 'var(--font-size-desktop)',
                                'line-height': 'var(--line-height)',
                                'line-height--desktop': 'var(--line-height-desktop)',
                                'letter-spacing': 'var(--letter-spacing)',
                                'letter-spacing--desktop': 'var(--letter-spacing-desktop)',
                                'font-family': 'var(--font-family)',
                                'color': 'var(--color-text)',
                            }
                        }
                    ]
                }
            ]
        },
        {
            title: "Buttons",
            type: "block",
            groups: [
                {
                    title: "Primary Button",
                    html: `
                        <button class="action primary" type="submit">Primary CTA</button>
                        <button class="action primary" type="submit" disabled>Disabled Primary CTA</button>
                    `,
                },
                {
                    title: "Secondary Button",
                    html: `
                        <button type="submit">Secondary CTA</button>
                        <button type="submit" disabled>Disabled Secondary CTA</button>
                    `,
                },
                {
                    title: "Tertiary Button",
                    html: `
                        <a class="abs-action-link-button" href="#">Special tertiary link</a>
                    `,
                },
                {
                    title: "Invisible Button",
                    html: `
                        <button type="submit" class="button--transparent">Transparent button</button>
                    `,
                },
                {
                    title: "Anchor Link",
                    subtitle: "Just Your Average Link",
                    html: `
                        <a  href="#"">A regular link</a>
                    `,
                },
            ]
        },
        {
            title: "Icons",
            type: "icons",
            source: "https://midatlanticortho2.test",
            groups: [
                {
                    title: "Theme Icons",
                    options: [
                        {
                            title: "Cart",
                            id: "cart",
                        },
                        {
                            title: "Search",
                            id: "search",
                        },
                        {
                            title: "Facebook",
                            id: "facebook",
                        },
                        {
                            title: "Twitter",
                            id: "twitter",
                        },
                        {
                            title: "LinkedIn",
                            id: "linkedin",
                        },
                        {
                            title: "Instagram",
                            id: "instagram",
                        },
                        {
                            title: "Youtube",
                            id: "youtube",
                        },
                        {
                            title: "Chevron Up",
                            id: "up",
                        },
                        {
                            title: "Chevron Down",
                            id: "down",
                        },
                        {
                            title: "Plus",
                            id: "expand",
                        },
                        {
                            title: "Minus",
                            id: "collapse",
                        },
                        {
                            title: "Close",
                            id: "remove",
                        },
                        {
                            title: "MAO Logo Icon",
                            id: "mao",
                        },
                    ]
                }
            ]
        },
        {
            title: "Forms",
            type: "block",
            groups: [
                {
                    title: "Custom Checkbox",
                    html: `
                        <div>
                            <input id="check1" type="checkbox" checked="checked" />
                            <label for="check1">Checked Checkbox</label>
                        </div>

                        <div>
                            <input id="check2" type="checkbox" />
                            <label for="check2">Unchecked Checkbox</label>
                        </div>

                        <div>
                            <input id="check3" type="checkbox" disabled="disabled" />
                            <label for="check3">Disabled Unchecked Checkbox</label>
                        </div>

                        <div>
                            <input id="check4" type="checkbox" disabled="disabled" checked="checked" />
                            <label for="check4">Disabled Checked Checkbox</label>
                        </div>
                    `,
                },
                {
                    title: "Custom Radio",
                    html: `
                        <div>
                            <input id="radio1" type="radio" checked="checked" />
                            <label for="radio1">Checked Radio</label>
                        </div>

                        <div>
                            <input id="radio2" type="radio" />
                            <label for="radio2">Unchecked Radio</label>
                        </div>

                        <div>
                            <input id="radio3" type="radio" disabled="disabled" />
                            <label for="radio3">Disabled Unchecked Radio</label>
                        </div>

                        <div>
                            <input id="radio4" type="radio" disabled="disabled" checked="checked" />
                            <label for="radio4">Disabled Checked Radio</label>
                        </div>
                    `,
                },
                {
                    title: "Select",
                    html: `
                        <div class="custom-select">
                            <select>
                                <option value="" disabled selected hidden>Choose your option</option>
                                <option>Dos</option>
                                <option>Tres</option>
                                <option>Cuatro</option>
                                <option>Cinco - A very long option name to test wrapping</option>
                            </select>
                        </div>
                    `,
                },
                {
                    title: "Login Form Example",
                    html: `
                        <form class="form">
                            <fieldset class="fieldset" data-hasrequired="* Required Fields">
                                <div class="field required">
                                    <label class="label" for="email"><span>Email</span></label>
                                    <div class="control">
                                        <input name="login[username]" value="" autofocus="" autocomplete="off" id="email" class="input-text" title="Email" data-validate="{required:true, 'validate-email':true}" aria-required="true" type="email">
                                    </div>
                                </div>
                                <div class="field required">
                                    <label for="pass" class="label"><span>Password</span></label>
                                    <div class="control">
                                        <input name="login[password]" autocomplete="off" class="input-text" id="pass" title="Password" data-validate="{required:true}" aria-required="true" type="password">
                                    </div>
                                </div>
                                <div class="actions-toolbar">
                                    <div class="primary"><button type="submit" class="action login primary" name="send" id="send2"><span>Sign In</span></button></div>
                                    <div class="secondary"><a class="action" href="#"><span>Forgot Your Password?</span></a></div>
                                </div>
                            </fieldset>
                        </form>
                    `
                }
            ]
        },
        {
            title: "Tables",
            type: "block",
            groups: [
                {
                    title: "Regular",
                    options: [
                        {
                            title: "Checkbox",
                            id: "checkbox",
                        },
                    ]
                }
            ]
        },
        {
            title: "Breadcrumbs",
            type: "block",
            groups: [
                {
                    title: "Breadcrumbs",
                    html: `
                        <div class="breadcrumbs">
                            <ul class="items">
                                <li class="item home">
                                    <a href="#" title="Go to Home Page">Home</a>
                                </li>
                                <li class="item category43"><strong>Furniture</strong></li>
                            </ul>
                        </div>
                    `,
                    properties: {
                        color: "#000"
                    }
                }
            ]
        },
        {
            title: "Alerts",
            type: "block",
            groups: [
                {
                    title: "Success Alert",
                    html: `
                        <div class="messages">
                            <div class="message success">
                                <div>
                                    Brilliant mate! Job well <a href="#">done</a>. Smashing success:  !important;
                                </div>
                            </div>
                        </div>
                    `,
                    properties: {
                        color: "#000"
                    }
                },
                {
                    title: "Error Alert",
                    html: `
                        <div class="messages">
                            <div class="message error">
                                <div>
                                    Dangerrrrr <a href="#">zone</a>. You're now entering the danger zone!
                                </div>
                            </div>
                        </div>
                    `,
                    properties: {
                        color: "#000"
                    }
                },
                {
                    title: "Warning Alert",
                    html: `
                        <div class="messages">
                            <div class="message warning">
                                <div>
                                    Lorem ipsum dolor sit <a href="#">amet</a>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </div>
                            </div>
                        </div>
                    `,
                    properties: {
                        color: "#000"
                    }
                },
                {
                    title: "Double Stacked Alerts",
                    html: `
                        <div class="messages">
                            <div class="message error">
                                <div>
                                    Lorem ipsum dolor sit <a href="#">amet</a>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </div>
                            </div>
                            <div class="message success">
                                <div>
                                    Lorem ipsum dolor sit <a href="#">amet</a>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </div>
                            </div>
                        </div>
                    `,
                    properties: {
                        color: "#000"
                    }
                }
            ]
        },
        {
            title: "Promobar",
            type: "block",
            fullbleed: true,
            groups: [
                {
                    title: "Promo Bar",
                    html: `
                        <div class="promobar js-animate">
                            <div class="container">
                                FREE SHIPPING ON ALL ORDERS $50+ AND FREE RETURNS
                                <a href="#"><strong>SHOP NOW</strong></a>
                                <button class="promobar__close" type="button"></button>
                            </div>
                        </div>
                    `,
                    properties: {
                        color: "#000"
                    }
                }
            ]
        },
        {
            title: "Pagination",
            type: "block",
            groups: [
                {
                    title: 'Pagination',
                    html: `
                    <div class="toolbar-wrapper">
                        <div class="pages">
                            <strong class="label pages-label" id="paging-label">Page</strong>
                            <ul aria-labelledby="paging-label" class="items pages-items">
                                <li class="item current"><strong class="page"><span class="label">You're currently reading page</span> <span>1</span></strong></li>
                                <li class="item">
                                    <a class="page" href="#"><span class="label">Page</span> <span>2</span></a>
                                </li>
                                <li class="item">
                                    <a class="page" href="#"><span class="label">Page</span> <span>3</span></a>
                                </li>
                                <li class="item">
                                    <a class="page" href="#"><span class="label">Page</span> <span>4</span></a>
                                </li>
                                <li class="item">
                                    <a class="page" href="#"><span class="label">Page</span> <span>5</span></a>
                                </li>
                                <li class="item pages-item-next">
                                    <a class="action next" href="#" title="Next"><span class="label">Page</span> <span>Next</span></a>
                                </li>
                            </ul>
                        </div>
                        <div class="field limiter">
                            <label class="label abs-visually-hidden" for="limiter"><span>Products Per Page</span></label>
                            <div class="control">
                                <a class="active" data-role="limiter" href="?product_list_limit=1">View 1</a> <a data-role="limiter" href="?product_list_limit=60">View 60</a> <a data-role="limiter" href="?product_list_limit=120">View 120</a>
                            </div>
                        </div>
                    </div>
                    `,
                }
            ],
            properties: {
                color: "#000"
            }
        },
    ]
};

export default data;