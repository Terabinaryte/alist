import {
  a as de,
  a4 as fe,
  a7 as R,
  aC as xe,
  ae as _e,
  ai as j,
  aJ as k,
  au as me,
  aW as P,
  ax as W,
  b as J,
  b5 as be,
  b9 as _,
  ba as Se,
  bG as N,
  bk as $e,
  bl as Ce,
  bP as we,
  bQ as T,
  bX as ie,
  C as O,
  c4 as m,
  c8 as se,
  c9 as D,
  ca as S,
  cb as $,
  cc as le,
  cd as ce,
  ce as ue,
  cf as ge,
  cg as he,
  ch as F,
  ci as ve,
  E as A,
  e as ae,
  h as e,
  I as U,
  k as pe,
  m as f,
  n as b,
  S as w,
  U as x,
  X as z,
  bg
} from "./index.d1370f4d.js";
import {a as ke} from "./useTitle.a8855539.js";
import {
  a as Ge,
  g as Ie,
  s as ye
} from "./webauthn-json.browser-ponyfill.1c672167.js";
const Le = "https://github.com/alist-org/alist";
function Ee(s) { return se(`${s}-${Le}`) }
const
    Te = j(
        '<div style="background: url(\'/images/background.jpg\');background-position: center;background-size: cover;position: fixed;top: 0;left: 380px;overflow: hidden; z-index: -1;width: -webkit-fill-available;height: -webkit-fill-available;"></div>'),
    Oe =
        () => {
          const s = z("#66ccff", "#66ccff");
          return e(R, {
            get children() {
              return [Te]
            }
          })
        },
    ze =
        () => {
          const s = k("sso_login_enabled"), u = x("sso_login_platform"),
                n = k("sso_compatibility_mode"),
                {searchParams : c, to : g} = J(), r = c.token;
          r != null && r != "" &&
              (m(r), g(decodeURIComponent(c.redirect || $ || "/"), !0));
          function l(a) {
            const t = a.data;
            t.token &&
                (m(t.token), g(decodeURIComponent(c.redirect || $ || "/"), !0))
          }
          if (window.addEventListener("message", l),
              ae(() => {window.removeEventListener("message", l)}), s) {
            const a = () => {
              const i = _.getUri() + "/auth/sso?method=sso_get_token";
              if (n) {
                window.location.href = i;
                return
              }
              window.open(i, "authPopup", "width=500,height=600")
            };
            let t;
            switch (u) {
            case "Github":
              t = ge;
              break;
            case "Microsoft":
              t = ue;
              break;
            case "Google":
              t = ce;
              break;
            case "Dingtalk":
              t = le;
              break;
            default:
              t = ie
            }
            return e(W,{cursor:"pointer",boxSize:"$8",as:t,p:"$0_5",onclick:a})
          }
        },
    Ne =
        () => {
          const s = x("logo").split(`
`),
                u = z(s[0], s.pop()), n = de(),
                c = pe(() => `${n("login.login_to")} ${x("site_title")}`);
          ke(c);
          const g = z("white", "$neutral1"),
                [ r, l ] = f(localStorage.getItem("username") || ""),
                [ a, t ] = f(localStorage.getItem("password") || ""),
                [ i, d ] = f(""), [ C, H ] = f(!1),
                [ v, K ] = he("remember-pwd", "false"), [ y, M ] = f(!1),
                [ V, X ] = P(async () => y() ? _.post("/auth/login/ldap", {
                  username : r(),
                  password : a(),
                  otp_code : i()
                })
                                             : _.post("/auth/login/hash", {
                                                 username : r(),
                                                 password : Ee(a()),
                                                 otp_code : i()
                                               })),
                [, Z ] = P((o, p, h) => _.post(
                               "/authn/webauthn_finish_login?username=" + h,
                               JSON.stringify(p), {headers : {session : o}})),
                [, q ] =
                    P(o => _.get("/authn/webauthn_begin_login?username=" + o)),
                {searchParams : I, to : G} = J(),
                Q = k("webauthn_login_enabled"), Y = async () => { H(!C()) },
                L =
                    async () => {
                  if (C()) {
                    if (!ye()) {
                      b.error(n("users.webauthn_not_supported"));
                      return
                    }
                    m(), v() === "true" ? localStorage.setItem("username", r())
                                        : localStorage.removeItem("username");
                    const o = await q(r());
                    Se(o, async p => {
                      try {
                        const h = Ie(p.options), ne = await Ge(h),
                              oe = await Z(p.session, ne, r());
                        N(oe, re => {
                          b.success(n("login.success")),
                          m(re.token),
                          G(decodeURIComponent(I.redirect || $ || "/"), !0)
                        })
                      } catch (h) {
                        h instanceof Error && b.error(h.message)
                      }
                    })
                  } else {
                    v() === "true" ? (localStorage.setItem("username", r()),
                                      localStorage.setItem("password", a()))
                                   : (localStorage.removeItem("username"),
                                      localStorage.removeItem("password"));
                    const o = await X();
                    N(o, p => {
                      b.success(n("login.success")),
                      m(p.token),
                      G(decodeURIComponent(I.redirect || $ || "/"), !0)
                    },
                      (p, h) => {!E() && h === 402 ? ee(!0) : b.error(p)})
                  }
                },
                [ E, ee ] = f(!1), B = k("ldap_login_enabled"),
                te = x("ldap_login_tips");
          return B && M(!0), e(xe, {
                   zIndex : "1",
                   w : "$full",
                   h : "100vh",
                   justifyContent : "unset",
                   alignItems : "unset",
                   get children() {
                     return [
                       f('<div style="height: 20%;"></div>'),
                       e(fe, {
                         get bgColor() { return g() },
                        //  rounded : "$xl",
                         p : "24px",
                         w : {"@initial" : "100%", "@sm" : "380px"},
                         spacing : "$4",
                         get children() {
                           return [
                             e(T, {
                               alignItems : "center",
                               justifyContent : "space-around",
                               get children() {
                                 return [
                                   e(me, {
                                     mr : "$2",
                                     boxSize : "$12",
                                     get src() { return u() }
                                   }),
                                   e(we, {
                                     color : "$info9",
                                     fontSize : "$2xl",
                                     get children() { return c() }
                                   })
                                 ]
                               }
                             }),
                             e(w, {
                               get when() { return !E() },
                               get fallback() {
                                 return e(U, {
                                   id : "totp",
                                   name : "otp",
                                   get placeholder() {
                                     return n("login.otp-tips")
                                   },
                                   get value() { return i() },
                                   onInput : o => d(o.currentTarget.value),
                                   onKeyDown : o => { o.key === "Enter" && L() }
                                 })
                               },
                               get children() {
                                 return [
                                   e(U, {
                                     name : "username",
                                     get placeholder() {
                                       return n("login.username-tips")
                                     },
                                     get value() { return r() },
                                     onInput : o => l(o.currentTarget.value)
                                   }),
                                   e(w, {
                                     get when() { return !C() },
                                     get children() {
                                       return e(U, {
                                         name : "password",
                                         get placeholder() {
                                           return n("login.password-tips")
                                         },
                                         type : "password",
                                         get value() { return a() },
                                         onInput : o =>
                                             t(o.currentTarget.value),
                                         onKeyDown :
                                             o => { o.key === "Enter" && L() }
                                       })
                                     }
                                   }),
                                   e(T, {
                                     px : "$1",
                                     w : "$full",
                                     fontSize : "$sm",
                                     color : "$neutral10",
                                     justifyContent : "space-between",
                                    //  alignItems : "center",
                                     get children() {
                                       return[e(F,{get checked(){return v()==="true"},onChange:()=>K(v()==="true"?"false":"true"),get children(){return n("login.remember")}}),e(be,{as:"a",target:"_blank",get href(){return n("login.forget_url")},get children(){return n("login.forget")}})]
                                     }
                                   })
                                 ]
                               }
                             }),
                             e(_e, {
                               w : "$full",
                               spacing : "$2",
                               get children() {
                                 return [
                                   e(w, {
                                     get when() { return !C() },
                                     get children() {
                                       return e(O, {
                                         colorScheme : "primary",
                                         w : "$full",
                                         onClick : () => {E() ? d("")
                                                              : (l(""), t(""))},
                                         get children() {
                                           return n("login.clear")
                                         }
                                       })
                                     }
                                   }),
                                   e(O, {
                                     w : "$full",
                                     get loading() { return V() },
                                     onClick : L,
                                     get children() { return n("login.login") }
                                   })
                                 ]
                               }
                             }),
                             e(w, {
                               when : B,
                               get children() {
                                 return e(F, {
                                   w : "$full",
                                   get checked() { return y() === !0 },
                                   onChange : () => M(!y()),
                                   children : te
                                 })
                               }
                             }),
                             e(O, {
                               w : "$full",
                               colorScheme : "accent",
                               onClick : () => {
                                 m(),
                                 G(decodeURIComponent(I.redirect || $ || "/"),
                                   !0)
                               },
                               get children() { return n("login.use_guest") }
                             }),
                             e(T, {
                               mt : "$2",
                               justifyContent : "space-evenly",
                               alignItems : "center",
                               color : "$neutral10",
                               w : "$full",
                               get children() {
                                 return [
                                   e($e, {}), e(Ce, {}), e(ze, {}), e(w, {
                                     when : Q,
                                     get children() {
                                       return e(W,{cursor:"pointer",boxSize:"$8",as:ve,p:"$0_5",onclick:Y})
                                     }
                                   })
                                 ]
                               }
                             })
                           ]
                         }
                       }),
                       e(Oe, {})
                     ]
                   }
                 })
        };
export {Ne as default};
