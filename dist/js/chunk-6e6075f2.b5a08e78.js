(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e6075f2"],{"0079":function(t,a,e){},"013f":function(t,a,e){},"1d4a":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAMAAACBKikvAAABs1BMVEUAAADpNQPlLAPXEgTlLgPdHgTjKwPpNAPnMQPjKQPrOALbGwTrOALeHwTeIQTaGQTmLgPcGgTXEwTiKAPpMwPXEQXoMgPXEwTqNgPYFQXpNAPrOAPrOQPlLQThJgPlLQPYFQTbGgTUDwXZFgTvQQLkKwPyRALqNwPoMwPzRwLrOALhJQTXEwX0SQLeIATeIQTqNwPZGATVEAXrOQPvPwLrOQPUDgXZFgXnMwPxQwLYFAToNQPXFQXZFwThJQTrOQPfIwTpNQPhJwPjKQPzSALXEgXiJgPYFAXVDwXuPgLZFwTpNAPsOwPtPALbGwXqNwPqNwPVEQXcHQThJwTXEwXXFAXaGgTuQALaGgTuQAPWEgTsPAPtPAPtPAPtPAPWFAXWEwXfIwTnMQPfIwTaGgXyRgLyRQLXFAXeIQTuPwPWEQXxRALUDgX0SgLsOwPxRQLpNQPYFQToMwPXEwTVEATWEgTqNwPaGQTrOQPkKgPiJwPfIgTZFwTxQwLtPQLmLwPgJAPuPgLeHwTdHQTcGwTZFgTnMQPlLQPyRgLmMQPvQALsOwLeIQTzSALwQQLuQALhJQSqOO2PAAAAcHRSTlMAAvotLRwK9/E2KSMgDgX19e3q6srIw5mLbF9aUE9IQCkV/Pv78vLt6uTj3dbSycW8ureysainopqXk4+NhoGBeXlxYmFfV01APz03JhT5+ffu5+Pi4dvb19bOzMnFwK6pk5GPgH95cVxTUExFRDgYROQk8gAAAipJREFUOMuNkwVz4kAYhhcpXqS4FOru7u69nru7S3MkhyQ4BIf+5NuFdJqwGeCZyLfvPhP5dhaI8OMXaAvJ5KSkLfGgXD5ox1OM5sqjijbETznI59ben6FILhIZumgprkZqrLbyNAOFSqVQqAzcaiEuFAqJZ0+q1epCc+80EU0kPN/Q9bSp+CIajb4G4BW8vWzmuYLFYvAcgN/wXnSLOzrP9vxYELKIRouoGpvf9uj4a6txO2aG/3HcrU3p7qD6Ep7DMw63Bq39rkV5yccBaqwLQqVtF2hG/t6gtKx01sWLFYuSNzEC26pW5dk8y6ps6y65HvDQy13vbSqWzedZlRwFPmMsFst3A1G6YxDjeX3glWazWaNPzPOhKakXcBxJQ6HQoBr31INwQsp72X4YBmZ5oyc3h8Lh0D4/2gtDHmiFntaM0j1huBWPx6/GO/hRx/gVDLdAA+/iNE3v8JMdGvIB36TTJZo+4idfS6XStARgTCWTScGPn8FgCuCYUqlUr+AbYXAf9zrT6bSBKxX1j7kNI3yDywKBwFNU9G6aTB9rj34Mox5MPGYYZha+b83ABAKMYQN2ahaKXkx0Egxjly33ZzJMhoBH/3KPPZMhnJi4QRBEFyEADTcx8Y3/mkfOLw/9FDd4i4nPKYSfmjjUA6A/nIAlwoqJ90iKIknrsYRbqO9WkiQpsgtrIwmZO+NHJ3MoUzS2kexbkmG9XeojGxv5c00LRNDaT7jqP6Lou9LnIx4CAAAAAElFTkSuQmCC"},"28fd":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisible.show,expression:"dialogVisible.show"}],staticClass:"dialogSharingFriends-container",on:{click:function(a){a.stopPropagation(),t.abc=1}}},[s("div",{staticClass:"share-box"},[s("div",{staticClass:"tip"},[t._v("\n      Tip: Sharing to new friends will cut faster and more.\n    ")]),s("h5",{staticClass:"tit"},[t._v("Share To")]),s("div",{staticClass:"share-types"},[s("div",{staticClass:"share-item"},[s("img",{attrs:{src:e("23b7")},on:{click:t.mx_shareFacebook}}),s("p",[t._v("Facebook")])]),s("div",{staticClass:"share-item"},[s("img",{attrs:{src:e("fe82")},on:{click:t.mx_shareLine}}),s("p",[t._v("LINE")])]),s("div",{staticClass:"share-item"},[s("img",{attrs:{src:e("d253")},on:{click:t.mx_shareWhatsapp}}),s("p",[t._v("WhatsApp")])]),s("div",{staticClass:"share-item"},[s("img",{attrs:{src:e("c64e")},on:{click:t.mx_shareMessenger}}),s("p",[t._v("Messenger")])])]),s("button",{ref:"copy",staticClass:"copy-link",attrs:{"data-clipboard-action":"copy","data-clipboard-text":t.shareInfo.share_url},on:{click:t.mx_copyLink}}),s("img",{staticClass:"close-img",attrs:{src:e("6eff")},on:{click:t.closeDialog}})])])},i=[],n=e("0f35"),r={mixins:[n["a"]],name:"dialogSharingFriends",props:{dialogVisible:{type:Object,default:function(){return{show:!1}}},shareInfo:{type:Object,default:function(){return{share_url:window.location.origin+"/forBargain",share_title:"分享标题",share_desp:"分享的描述",share_image:"https://s.pinimg.com/images/facebook_share_image.png"}}}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",{show:!1})}}},o=r,c=(e("9a8d"),e("17cc")),u=Object(c["a"])(o,s,i,!1,null,"e53e5582",null);a["a"]=u.exports},"31d6":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAMAAABiiJHFAAABmFBMVEUAAAD//////////////////////////////v7////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VDgXYFQXXEgXqNgPZFwThUkzaGQTvPwLoMwP96uXrOQPwQgLbGwTdHgThJgTgIwTuPQPtOwPeIATkLAPnMAPodGvpd2rmLgPjKgTiKAT0h2TygV/1h17tPwb83NPpfHT0hF/iVEzsgnPjV03nXkvnV0DoVDnyZzjqfnPpY0vjSznxZTbuXzbdOjDuhXPsZ0rrXj/lTznsXDjnMwblW0vuZUDpW0DtYj/qWDj+9vXwqqXtlY71mX3pf3rviHPkWUz0cEDxaD/hSj3fQjjeMiLoNQb84tr3zMn7z8H1urL5tZ3rjIbwinPucVHfTEbxaj/vZj/2po/viXPrfm/vgWflbWflamL2gVTYJRpK3CQpAAAALnRSTlMA6wEj0suzov3PU1L59vPtw0tHPdmBcm5VJyUKtZ0VezcfFqSeOdeSbE04FAYXe1UE/gAAA/JJREFUWMPF2QlfEkEYgPHZbeVMIFQU8kjL7l4kJDOEBGqhy8rKUqmsrLzKvI+y+/jazbKKrjvvu7D8sucD/N2dHYfdGWaZHPE0OQMnJR+ATzoZcDa1RGRWY4dOO/xgyu84fci+2dmhAJrS0WnHlIMOF5C5WoNytahXgQpSvFXB3XVQYXUNFaPtTqgiZ3tlqkeCqpJamHVH26DqThy1nKhusJHbYhqflcBW0llKPVIPNqs/Qjysw2C7wx70WinV2kWu91g91FT9MeEckKDGJMF8OF8HptZmb+10d7ubO82uCeaZef6eMq9Qv6/oXeJd5Q3y+rUuavXdNLtt+1UvmJrfRcdulBvnaEnt6/sEpjxG9Zx5YDd0VOs27Dalo1q5dfPwnjOwTuRi9fu/vbFyZ7uVr2U0lxNc7vG9agOYG8MGVUd56iSYa9hVZdGqPVK6fb0yylteXn6pparqM9G6LlPPS2dHLqP9UNWsiAVv+WLdQpbf/zygzWazYlaRmV4QhCwf1M84+zGbzQtZCDI9B8IODpJsHmFbdbXLJWb54/+As9/y+cITEOXS30uaQdgYn1QE+65QQFjoKLFuhO3vt2BTCKuUFkTA2S8Em0phLES0McDZiwT7lGCbsXnAG+f/UZMUm05jrIMx2W+TTafTD0CcX2YRwNk+ms1gLETYGZTl69Qbis3grIeFbLL3MwTbxNoA6QVfVEl2YABlnSyAsrkcyQ4QbIA14qyqPqfZV4DUyCSUVS3YZBJlJebD2WyWYpME62OA9TZrxSZQFkg2T7CPk4nEe5z1oWw+n39NsAmC9TGJYAskG4+jrIRPsEeFAsnG4/FhfIIFcDaVItmeHpQNsDaU5ev0Q4LtIVgnCxFsmmCHKLaJncHZtG22hUVQNm3BxmIoG2ayH2czFBuLxe6hPzr4T+REJmOXdSA/6DWyzcTrxwSx/PM2Y9FoLzq0PDfC8nV66fv1PV3b01AxirKK/mqHs0leghfn9ejF9DiKsh3Ui+goiRKsq5N6bR7VVAQl2VbyJX90/6UWi0aVs+RLvqwIWSO6sAqwWtRRklVk8gNq1HD/S6A19SdqyXrJzz3O7h3UGSg1Z8nWyfTH6aLhUU1DqRkDu0V+nPKOg6kFw/Pv3f5bBnaY/JTmtUuwvxnjpNoE3lDU0DTsT2q32qZwLRln6uLcXNGoFsGUx3pT5fJCWRW2NWXebKxoC2j61z2tXlE/15EtoH+wYXVw22u1bwYe4NZl7RutRN12t4W7D34T2/6W+0EfENg/zuhildZQxeHL/z8q0uBgq+2DLbquEDEW7tAFZrtwSHxoGAqzGpPDLfyIs1E/4mzUjjjD1vf+Fx7uU9q3baRbAAAAAElFTkSuQmCC"},"31e7":function(t,a,e){"use strict";e.d(a,"b",function(){return i}),e.d(a,"c",function(){return n}),e.d(a,"a",function(){return r}),e.d(a,"d",function(){return o});var s=e("007a");function i(t){var a=t.bargain_id;return s["a"].post({url:"/api/v1/bargain/get_bargain_info",data:{bargain_id:a}})}function n(t){var a=t.bargain_id,e=t.page_size,i=t.page_num;return s["a"].post({url:"/api/v1/bargain/get_help_bargain_list",data:{bargain_id:a,page_size:e,page_num:i}})}function r(t){var a=t.bargain_id,e=t.spu_id;return s["a"].post({url:"/api/v1/bargain/chop",data:{spu_id:e,bargain_id:a}})}function o(t){var a=t.page_size,e=void 0===a?10:a,i=t.page_num,n=void 0===i?1:i;return s["a"].post({url:"/api/v1/spu/get_mybargain_spus",data:{page_size:e,page_num:n}})}},"40b8":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAMAAABiiJHFAAACUlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UDgXbGgTWEQXXEwXZFwThJgTnMQPYFQXoMwPjKATcHATeIATdHgTmLwPlLAPfIgTVDwXkKgTgJATqNwPlLgPsOgPpNQPuPgPrOAPyRQLvQQLtPQPxQwLrjIftPAPpNgPvQALzRwL/+/rsjILskIv+8/D//fz52tjnTC3bMyrbLCL/+ff+8Ov2qJL+9/T96+f619H40Mn3ycT7zLv5x7r3xLr1sKHzppr6rY7rioPsbFHpWDrnUTbnTzPjRzDpPhHsQAr85+L95t384dj1uK74tZ74sZn1oozyknzwiXPpdGfseWXwfWH0hWD0e0/2d0LrYULmVkLyYCzuWCzmRiftUSTzXCLxVyHyURTlNhTtRA/xSAv75uX74+D839X73dX729P608j70MP1xcHzuLT3vrHys7H2vLDxrKf4t6Lwm5H3p43wlofvkYP3oH/qhH7pfnrzkHXlbGbxg2Xpc2PyfVnlYFPxc0/wcUzgTUbpW0HxZjnZJh3kOxzgMxvoPhbXHxbkNBDmMQb708P7xbDvpqLvoZvtlY/5qontjIPpeG72jGLtdl7gU03gUUvgRTfcJRLhLQ7kMQ04d65VAAAAMnRSTlMA66Mmz7Pt0ctTFvz5Ukc9N0v08thyb1UjIQq1nPbEwoF7HtmekoJsTRQG6dOmn1FQSkSv6TQAAAWGSURBVFjDxZllW1RBGIZ3iV0QA0EExcLueBCRkBJExRUVVxeQTlGQsLuVtLu7u7v/l3Nm5rBnOTPrsnF5f9pP9zVvnHdmZwz/xj94lN+IQcZwINw4aITfqEh/g6dETQg0QYcpcEKU+87RMWZIMceMdkvaPzAETgmJ7t9raT8zXMDcr1fSAUFwkaABLkv7+KEX+PVxzRpsRK8wRrogHToMvWbs0H9ZhwTADQKGOLeGToFbGEOdWQcOh5sMH+ikWH3hNn2DZdZZxOqBV7Le0DB4RFiosAeM8BCjoB8mB8FjAvT9Ow5eYFhP60x4hR7tMMkIr2Cc5KD1g5fwc5iv8Bra+SvpguLqdevelYBifbt1WzX/basp3XZaNtc1OwyErGtduXLlkvavViD/RpvFkre4a+8moGxvZ07OggWHt0KIfR8SDsP8/YqUsC8fmw8Rad7ixUuXtlxG8WEiXbBiUdIeiDB377EQoVpbgU1dXLp8+cKFW1HcokiTkhLEXnU/DoSAT0yam1sNtJH4FSuRLszJOYnSRcSakJCQtgUCovmOGAI9Ni7NPQTcIEvlUppUoJlK07JfQkAIO5cMFpZLkRIsV1FmUePPYUmtxl0qzU5PvwgBMfKC7adWi8VyAts0S6VJfYgaYiXS9Mxv0qJFQYC1PZdZ24F9GilNajOsb5SlZmZmFkKEvywH5UuoNC/vKdCmxs/qT+LfiCNUmpz83AoBg2V9sIlKSaX2obiTLFUrTUurQUO6Ik2e21EGAYFEa4IAW5eFNdV9lLTY42f1Tz+PA1Q6d+5ziDCRszaEtPKmeoiyFnWpCWr9a9FApVlZByFJ7kQI2cub6ilwVBN/Nq0/yW2yIs3K2Cmb5hEQcoY3VacVj7TxK6V6jWK61IyMjAoIGW8YBjGHeFOdQak9flb/etQyacpB6TAfCTEneFPdRgmx2qUkqbXYrVhTUlKOQ8xIwyBIuMwq1QzsJFIWP63/EeT/ptLULZAwxmCEjM1HaVJLYX2pLpXWvwLXFGtq03HIMBrCIeH09qMsqRU49cYuzapDJV1qalNdASSEGyDm1KPuploLbKxPZ/2fVVgLXFOkqfPmzZu9qxxiJNqr3U114CQIa//w/t9tBXC2iUoJvy5BiDgJd7s7dQeA8p0dVMqa6kEVgF1ESoiPj18lTIKwZPe7P6q1AOpes/iJlSX1ng24zqSJiYk3RSUTNdhtJmVWa71dmsGT+qIKWK1ICXPmfBA0mOBzqOn+qLYDtkYeP5fypG4BvsQrUkKcviFG6j/e/Gb1o6oHrIVMyuPnUhL/OeAnk8bFrdF/vPpRs0P9UjvygSfapDIrT2oByhOJVGH+e92o0Q1GW5I6qc4DO3TxMymJvwj4OIdK589/hh5E6sb4dnWoNAAVVNoz/niW1F1AEZESYmMv9Bzjuk2nMJsPlSry2yF+LtVU6hKVEn7AAZNui9ysTqpC4KIo/kQCq9Rj4BWRKsTZoCVQt6GXqkOlDmiSxE+gSS3ArVjOOd2GHgUte9RJVYJKafy8UndQoGpvOqZWd1hq4JPqCbA7RRI/t8a+Aoq49gE0TNUf7fhQzboOvNBKHZfKS3UWd7i2CBpi9AfRA40bCI2NlaiUJ5VAZbdwoWiNQtF33UFUclzCFWH8XMp4DBHRTg/595zEz3kmOeRzzBBwUBq/nWPQY3b+B0outVMFPf2c/927surzKsZ6wjJHVjMEqw3y0Z9Tn/yVnuZ4reitP/49LhxnwCsE++RSZayProB8dmHl++s1zkAPLwN9fHXp+4tWTiirm/euhTlR7l1iR/niyn36UFceCEzoFaZI3zxn+OTx5f8/FSn0j/b6wxbPcUQApARE9DG4jX+E+NEwwvP3SP9I+sQZBoS5/MT5FxjZBvH+PgIQAAAAAElFTkSuQmCC"},"4acf":function(t,a,e){},"5cff":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABgCAMAAACjfDWBAAABj1BMVEUAAACYEwCYEwCYEwCYEwCYEwCYEwCYEwCYEwCYEwCYEwCYEwCYEwCYEwCaFgKYEwCYEwDwvGeYEwC1SyP4y271zHzQf0G+XCz3yGykKw/50HPqsF7qsWHlpVjmrmfgoFncmVXHbDWdHQf514f40Hn30Hz3zXn304X1yXH0xm31x3DzwmjzxXDzwmrywWzxwGvstmTwxHnhoFTqtm3Uh0Xal1rKdUG3UCmlLBCkKw/5zm/hoT366bP62Yn60XX66LH603j66rb62Ib62oz603v61oD656760HL614P65qv65an61H3646T65Kf64qH64Z/64Jz63ZT635r63pbHhh/624763JL6z3H656/63pjipEL625DVnD/hsFboslTuw2/uwmruw2342Y/hsVvpuWDKjCjpu2XzynPuxXLhsVnwyX330Xv0znrnsFLmrU7yzoTotFvbp0v225vtvGPktl7erFTkqUnkqEfVnUDRlzjOkTD01pHrvmfhsVjz04331Ib0z4Lrv2neq1DYokbYoUXWZrecAAAAO3RSTlMABA4fCxMaCCQtMSgcFkE6Nck9SvLUdV3qQPq0raCLiHtlN/Pz6+jl4d7d29fX0Mu2sZuXfWJONjYy+i7maKYAAASQSURBVGje3M7NasJAFIbhqNGVd3SE4qagxP6CtLNQLKIykB8SSBYB9dKbWqHT9MvMSZoBybs9fA/HcZyetZyLPrVU4Re6O7WUW/g9dzi11NAt+P5oYqlR/4sfTyw1vvCDiaUGN8Uv5DYVWSS9evwdLynoO3HgDerwsy39FHkt83FAalneKh9SOcnm34yt6W874+rK3xvyIkL5sWHH4/OMcOLYAi+pugOHn+naka7tXDM187FP+oL4H3woyFho4udVSeIkq+YGPidex2Z8yuQzPb/AhcQtxICej9h81IRP2Xyq5T2cYPMCA53gH3A1eAx0gn/E1eAx0An+CVeDx0An+Becyvvrcr7KY4DNr8B5xeXfcQp/BuezwmPgyr/iFH4DzhuFxwCbp/1HuT1x+WecIFUo9fuIAT0fELegCZ+w+UTLL3EnNn/CgMKjEu7zSy3/SUy5tDQPRGHYDzQWW5fZVkHUpYh4W2STz4FAt68bnWhCbi2pQqGFWtqFlx/unJwRhc6kXRh8YE5yAu+T4WTIvY3n9SZvi2v9rQ3vaQ37k2eL1+mZ6G7V3yyyh7X+fw1+kT7YSQu/JmvXr8+f672G0PoDrxEOtP7Ya4Rj1ndcrxHcDutP/UY4Zb3T9Ruh65B+0zn3zQyT/LuOp9NJv2qTRF3yJOn7/YQxx8+dTdLvXgZm+ph+1TwDMaEWGAaB6gfBAIw5frlL+u2tlhsYeYTUdZhhUNI7XlWbIQ+GmFX60SNhTLutre1/G3Qyz8z6GFLXMUaBIsc7tdmE7kivlpUzOpekdy6EkRiZlPIFUki8CkUJqIfqkZhkCyzEAjOpyI3pC4f0NPy2u1IfC4L1IcSLKqEIURGawm6bRr9RDX/Pope6Ssx/7H6OGCHpadnY49HTdDrXh/V6NXuhSPFBbYkPxCv0h9cdmg1Pp9XtGYggdS0yhGUvzTCv2hlQKnUvxCgiyuVst0WzIejsXB3V6slMvHE7wqzHeiZaih5d8bnR22/vG/RFmH7XsZRvkW6jakVqMcVSdJ8/LOvV9ndObn6Rkx21edbr6X+2Ti+5DcJQFEClAk78AWOD+KMElEH+iqKMOqg66xK6/530YbcxA6uJA3cB5z5unGQzn75J9PLmfIbX8/FrzMzx+u17pPmcKQ3xft/8eJ5ezKOL3kxj5kG0PM6hH0uK7tOYeWD+ZDtd3yYwvJlmPD9O9h8Ts0/wePjx/IN/nqafB10Nb/fLyxT9Umrdyiufr6pX8WrFla55u0/jbveavutianSrvwgQJWVbfTmnaiNCUbCw6+Z9oiXmuXDVRc7xEllepG0gwrOTC37KOIFh1L/poT98QCwz8fTlmYyH0y2zWwfyA1WQN+n3w6RNrvDAtw5j/4XfQgYFPMrq4j+7qLOIA85CWF3pTxfAF1ACDV0rUuvZou3AJhQuN7hTgacaZJTfrrU4FOk7qEVxEPX1lkdS2Z7BXQt83YBJ3HMpo3uk5H1MsLZ9gzsW6IYQedABJX/BmILsoVDbGn+9ASqgAyHGPAhjCIEM9CTbNKgOKLnH17KxZ+gwcZB/AKS9y94gkVNvAAAAAElFTkSuQmCC"},6258:function(t,a,e){"use strict";var s=e("013f"),i=e.n(s);i.a},"821b":function(t,a,e){t.exports=e.p+"img/bargain-2.ad958951.png"},"84e7":function(t,a,e){t.exports=e.p+"img/WaterWomenBagba@2x.83269bf2.png"},"9a8d":function(t,a,e){"use strict";var s=e("0079"),i=e.n(s);i.a},"9d3d":function(t,a,e){"use strict";var s=e("d0e5"),i=e.n(s);i.a},a1ae:function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t===1/a:t!=t&&a!=a}},aaa4:function(t,a,e){"use strict";var s=e("4d65"),i=e("a1ae"),n=e("b21e");e("c5aa")("search",1,function(t,a,e,r){return[function(e){var s=t(this),i=void 0==e?void 0:e[a];return void 0!==i?i.call(e,s):new RegExp(e)[a](String(s))},function(t){var a=r(e,t,this);if(a.done)return a.value;var o=s(t),c=String(this),u=o.lastIndex;i(u,0)||(o.lastIndex=0);var l=n(o,c);return i(o.lastIndex,u)||(o.lastIndex=u),null===l?-1:l.index}]})},af87:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bargainingProgressBar-container"},[t._v("\n  砍价进度条\n")])},i=[],n={name:"bargainingProgressBar"},r=n,o=e("17cc"),c=Object(o["a"])(r,s,i,!1,null,"9152d290",null);a["a"]=c.exports},ca81:function(t,a,e){t.exports=e.p+"img/$@2x.b9c42f09.png"},d0e5:function(t,a,e){},db1b:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bargain-container"},[s("div",{staticClass:"bargain-header"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e("5cff"),expression:"require('./../assets/images/HOME@2x.png')"}],staticClass:"turn-home",on:{click:function(a){return t.$router.push("/")}}}),s("div",{staticClass:"bargain-banner"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e("84e7"),expression:"require('./../assets/images/WaterWomenBagba@2x.png')"}]})]),s("div",{staticClass:"bargain-info-box"},[s("img",{staticClass:"bg",attrs:{src:e("821b")}}),s("div",{staticClass:"bargain-content"},[s("div",{staticClass:"bargain-info"},[s("div",{staticClass:"img-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.spu.spu_pics&&t.spu.spu_pics[0]||e("595f"),expression:"spu.spu_pics&&spu.spu_pics[0]||require('./../assets/images/good-large.png')"}]})]),s("div",{staticClass:"detail"},[s("p",{staticClass:"title"},[t._v(t._s(t.spu.title))]),s("div",{staticClass:"price-box"},[s("div",{staticClass:"price-box-item"},[s("p",{staticClass:"p-t-3"},[t._v("244d Sent")]),s("p",{staticClass:"p-t-1"},[t._v("\n                  Price\n                  "),s("span",[t._v("$")]),s("span",[t._v(t._s(t.spu.original_price))])]),s("p",{staticClass:"p-t-2"},[t._v("current price")])]),s("div",{staticClass:"price-box-item"},[s("p",{staticClass:"p-n-1"},[s("span",[t._v("Rp")]),t._v(t._s(t.spu.price))])])])])]),s("div",{staticClass:"bargain-schedule"},[s("p",{staticClass:"title"},[t._v("Has been cut "),s("span",{staticClass:"n-1"},[s("span",{staticClass:"dollar"},[t._v("$")]),t._v(t._s(t.bargain_info.bargain_amount||0))]),t._v(", leaving "),s("span",{staticClass:"n-2"},[s("span",{staticClass:"dollar"},[t._v("$")]),t._v(t._s(t.bargain_info.bargain_after||t.spu.price))])]),s("div",{staticClass:"schedule"},[s("div",{staticClass:"active",style:{width:t.bargain_info.bargain_rate+"%"}}),s("div",{staticClass:"schedule-item"},[s("span",{staticClass:"description"},[t._v("cut "),s("span",{staticClass:"highlight"},[t._v(t._s(t.bargain_info.bargain_rate)+"%")])])]),s("div",{staticClass:"schedule-item ball ball-right"})])]),s("count-down",{staticClass:"spu-count-down",attrs:{dateDiff:t.spu.expire_ttl}}),s("div",{staticClass:"ctrl-box"},["ok"!=t.$route.query.helpCur&&2!=t.bargain_user_info.type?s("div",{staticClass:"share-btn",on:{click:t.goBargainChop}},[t._v("Help friend cut a knife")]):t._e(),"ok"==t.$route.query.helpCur&&2!=t.bargain_user_info.type?s("div",{staticClass:"share-btn",attrs:{onclick:"window.location.href='#helpCurOk'"}},[t._v("Also take it for free")]):t._e(),2==t.bargain_user_info.type?s("div",{staticClass:"share-btn"},[t._v("Receive reward")]):t._e(),2==t.bargain_user_info.type?s("p",{staticClass:"old-txt"},[t._v("TIP: Go to the personal interface and check out the benefits\n            immediately ")]):t._e()])],1)])]),s("div",{staticClass:"bargain-content"},[t.help_bargain_list&&t.help_bargain_list.length>0?s("div",{staticClass:"team-box"},[s("p",{staticClass:"page-title"},[t._v("Bargaining team")]),s("ul",{staticClass:"team-list"},t._l(t.help_bargain_list,function(a,i){return s("li",{key:i,staticClass:"team-list-item"},[s("div",{staticClass:"column"},[s("div",{class:"team-img huangguan"+(i+1)},[s("img",{attrs:{src:e("595f"),alt:""}})]),s("div",{staticClass:"team-info"},[s("p",{staticClass:"team-name"},[t._v(t._s(a.username))]),s("p",{staticClass:"team-date"},[t._v("2019-03-11 10:36:54")])])]),s("div",{staticClass:"column"},[s("p",{staticClass:"dollar"},[t._v("Rp"),s("span",[t._v(t._s(a.bargain_amount))])])])])}),0)]):t._e(),t.isOne?s("div",{staticClass:"help-page",attrs:{id:"helpCurOk"}},[s("p",{staticClass:"page-title"},[t._v("How to get a free gift")]),s("ul",{staticClass:"help-list"},[s("li",{staticClass:"help-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e("31d6"),expression:"require('./../assets/images/shouji@2x.png')"}]}),s("p",[t._v("Click on favorite goods")])]),s("li",{staticClass:"help-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e("40b8"),expression:"require('./../assets/images/yaoqinghaoyou@2x.png')"}]}),s("p",[t._v("Invite friends to bargain")])]),s("li",{staticClass:"help-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e("ecc2"),expression:"require('./../assets/images/liwu@2x.png')"}]}),s("p",[t._v("Cut into free")])])])]):t._e(),t.spu_list.length>0?s("div",{staticClass:"recommend-products"},[s("p",{staticClass:"page-title"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e("1d4a"),expression:"require('./../assets/images/start.png')"}]}),s("span",[t._v("More Products")])]),t._l(t.spu_list,function(a){return s("div",{key:a.spu_id,staticClass:"recommend-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.spu_pics&&a.spu_pics[0]||e("595f"),expression:"item.spu_pics&&item.spu_pics[0]||require('./../assets/images/good-large.png')"}],staticClass:"products-photo"}),s("p",{staticClass:"products-title"},[t._v(t._s(a.title))]),s("div",{staticClass:"products-ctrl"},[s("span",{staticClass:"money"},[t._v(t._s(a.deliver_count)+" Sent")]),s("a",{staticClass:"btn",attrs:{href:"javascrip:;"},on:{click:function(e){return t.jumpCurBargainPage(a.spu_id)}}},[t._v("Get Freebie")])])])})],2):t._e()]),s("dialog-sharing-friends",{attrs:{dialogVisible:t.dialogs.sharingFriends,shareInfo:t.shareInfo},on:{"update:dialogVisible":function(a){return t.$set(t.dialogs,"sharingFriends",a)},"update:dialog-visible":function(a){return t.$set(t.dialogs,"sharingFriends",a)}}}),s("dialog-old-users-help-cut-successfully",{attrs:{dialogVisible:t.dialogs.oldUsersHelpCutSuccessfully,chopInfo:t.chop_info},on:{"update:dialogVisible":function(a){return t.$set(t.dialogs,"oldUsersHelpCutSuccessfully",a)},"update:dialog-visible":function(a){return t.$set(t.dialogs,"oldUsersHelpCutSuccessfully",a)}}})],1)},i=[],n=(e("aaa4"),e("a98d")),r=(e("b5aa"),e("2c46")),o=e("af87"),c=e("28fd"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bargainingHelpInformation-container"},[t._v("\n  砍价帮\n")])},l=[],p={name:"bargainingHelpInformation"},g=p,d=e("17cc"),f=Object(d["a"])(g,u,l,!1,null,"5fa52e4b",null),v=f.exports,h=e("cd26"),A=e("f6b6"),m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dialogOldUsersHelpCutSuccessfully-container"},[s("van-popup",{staticStyle:{"background-color":"transparent",width:"100%"},attrs:{"close-on-click-overlay":!1},model:{value:t.dialogVisible.show,callback:function(a){t.$set(t.dialogVisible,"show",a)},expression:"dialogVisible.show"}},[s("div",{staticClass:"box"},[s("img",{staticClass:"bg",attrs:{src:e("ca81"),alt:""}}),s("div",{staticClass:"box-info"},[s("p",{staticClass:"top-tips"},[t._v("Help Him Cut ")]),s("p",{staticClass:"cut-num"},[s("span",[t._v("Rp")]),t._v(" "+t._s(t.chopInfo.bargain_amount))]),s("p",{staticClass:"bottom-tips"},[t._v("After he bys, you get "),s("span",[s("span",[t._v("Rp")]),t._v(" "+t._s(t.chopInfo.reward_amount))]),t._v(" to help cut rewards")])]),s("div",{staticClass:"close",on:{click:t.closeDialog}})])])],1)},b=[],w={name:"dialogOldUsersHelpCutSuccessfully",props:{dialogVisible:{type:Object,default:function(){return{show:!0}}},chopInfo:{type:Object,default:function(){return{bargain_id:1,bargain_amount:1,bargain_rate:1,reward_amount:"mock"}}}},data:function(){return{}},methods:{closeDialog:function(){this.$emit("update:dialogVisible",{show:!1})}}},P=w,C=(e("9d3d"),Object(d["a"])(P,m,b,!1,null,"15351fe8",null)),T=C.exports,x=e("996b"),L=e("5616"),y=e("31e7"),Q={components:{bargainingProgressBar:o["a"],dialogSharingFriends:c["a"],bargainingHelpInformation:v,countDown:h["a"],userPickingUpMessage:A["a"],dialogOldUsersHelpCutSuccessfully:T},data:function(){return{isOne:!1,dialogs:{sharingFriends:{show:!1},oldUsersHelpCutSuccessfully:{show:!1}},shareInfo:{},spu:{spu_pics:[]},bargain_info:{},bargain_user_info:{},chop_info:{},expirationDat:{h:"24",p:"00",m:"00"},help_bargain_list:[],helpBargainPageDat:{page_size:10,page_num:1},spu_list:[]}},created:function(){localStorage.getItem("userInfo")||(this.isOne=!0),this.init()},methods:{init:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$route.query.relationId){t.next=3;break}return t.next=3,this.initShareInfo(this.$route.query.relationId);case 3:this.initBargainInfo(),this.initHelpBargainList(),this.initSpuInfo(),this.initSpuList();case 7:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),initShareInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(a){var e,s,i,r,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(L["b"])({relation_id:a});case 2:e=t.sent,e&&e.data&&(s=e.data,i=s.bargain_id,r=s.spu_id,o=s.type,c=s.invite_user_id,this.$router.push({path:"/forBargain",query:Object(n["a"])({},this.$route.query,{bargainId:i,spuId:r,type:o,inviteUserId:c})}));case 4:case"end":return t.stop()}},t,this)}));function a(a){return t.apply(this,arguments)}return a}(),goBargainChop:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var a,e,s,i,n,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$store.state.userInfo.user_id){t.next=5;break}return a=window.location,e=a.pathname,s=a.search,this.$store.commit("setLoginJumpUrl",e+s+"&helpCur=ok"),this.$store.commit("setLoginSelectShow",!0),t.abrupt("return");case 5:return i=this.$route.query,n=i.bargainId,r=i.spuId,t.next=8,Object(y["a"])({bargain_id:n,spu_id:r});case 8:o=t.sent,o&&(o.data.bargain_info,this.dialogs.oldUsersHelpCutSuccessfully.show=!0);case 10:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),initSpuInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var a,e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(x["b"])({spu_id:this.$route.query.spuId});case 2:if(a=t.sent,a)for(s in e=a.data.spu,e)this.spu[s]=e[s];case 4:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),initBargainInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["b"])({bargain_id:this.$route.query.bargainId});case 2:a=t.sent,a&&a.data&&(this.bargain_info=a.data.bargain_info,this.bargain_user_info=a.data.bargain_user_info,console.log("this.bargain_user_info: ",this.bargain_user_info));case 4:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),initHelpBargainList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["c"])(Object(n["a"])({bargain_id:this.$route.query.bargainId},this.helpBargainPageDat));case 2:a=t.sent,a&&(this.help_bargain_list=a.data);case 4:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),initSpuList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var a,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.$store.state.goodsList.filter(function(t){return!t.isBargain}),!(a&&a.length>6)){t.next=4;break}return this.spu_list=a,t.abrupt("return");case 4:return t.next=6,Object(x["a"])({page_size:16,page_num:1,is_all:0});case 6:e=t.sent,e&&e.data&&(this.spu_list=e.data.spu_list,this.$store.commit("setGoodsList",this.spu_list));case 8:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),openSharingFriendsDialog:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(L["c"])({spu_id:this.$route.query.spuId});case 2:a=t.sent,a&&(this.shareInfo=a.data,this.dialogs.sharingFriends.show=!0);case 4:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),jumpCurBargainPage:function(t){if(!this.$store.state.userInfo.user_id){var a=window.location;a.pathname,a.search;return this.$store.commit("setLoginJumpUrl","/bargain?spuId=".concat(t)),void this.$store.commit("setLoginSelectShow",!0)}this.$router.push({path:"/bargain",query:{spuId:t}}),this.init()},refreshTime:function(){var t=this,a=this.$util.expiration(this.spu.expire_ttl);if(a){this.expirationDat=a;var e=setInterval(function(){t.expirationDat=t.$util.expiration(t.spu.expire_ttl)},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(e)})}}},beforeRouteUpdate:function(t,a,e){var s=t.query.helpCur;"ok"==s&&"#helpCurOk"!=window.location.hash&&(this.dialogs.oldUsersHelpCutSuccessfully.show=!0,this.$store.commit("setLoginSelectShow",!1),this.goBargainChop()),e()}},F=Q,k=(e("6258"),Object(d["a"])(F,s,i,!1,null,"8f9870c0",null));a["default"]=k.exports},ecc2:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAMAAABiiJHFAAAB9VBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VDgXdHgToMwPXEwXaGQTeIATYFQXcGwTfIgTZFwTgJATWEQXVEQbpNQPkLAPhJgTnMAP++fjjKATjKgTmLgPsOQP/+/rqNwPqOAP0vLjtPQPsOwPWGhLwQgL75uXvQALuPgP+9vX85+PmPBnZHxLxRAL1vrj4uKbjORz6xrXeLxveLBjgMBf74+H3w7j0raHoPhfkOBf//Pv+7+v70sj5van4taD6t5/1lXfshHfdLBzhKgj86uf63dz83dL5zcT4xrz2oYbsemf2iF7pRx/ZIhXrQRHdIQf3yMH3vrL2saHygmLwaD7xYS7sUSjcMSThMxryVRjrRBjbJhb62NH70MD4wrb0ubHxsq/6wKz3sZ32p5D1m4DzjnH2k3DrfXDwh27xfFztZkXrXD70cD3uWy7dOS7pPhPvSRHoNgb86OP1uK31sqPumpPzo5Hsi4Lxk3/nbmPxaDvhQzLtTBzrPwuRPKiCAAAAMHRSTlMAAev6pCYjtFNS6dHz7djDS0fPnT3MgW1VCtPLFfb1tXtxNx8WoTmSdXBNOBQGthcDuSkSAAAFFUlEQVRYw8WZ51tSYRTALwiSaBBqrqy0vTtGyyxARJQ0AisjKrJyVdpy5Z7tvfcef2fvy8F7u9dzWXKffp943g+/53DOee+7hITojEuK1lst5jyAPLPFur6oxKgTFkl2sWkpLGCpqTg7fefaijJQpaxibTpOnc0ECVht06UqzcmFJMjNSUm8YTkkyfLCpKXlBkgBQ3ly1iV6SAl9SRLS0gJImYLShI2aD2mQn6CNt5ohLcxb41mXrYQ0WbksTrGyIG2ylqjGitZ0vSrxrlkFi2LVGrIHzLBIzEQ/bF8BiyZ/Yf9uhAxQoLTmQEZQtMM2PWQE/TaZ1gAZwvCvtRBoWrr7X7/u7wQZobHx8RcPW4CmULLqVLqge6a1tdXv90+EQST8xuvzNTocsw+BZIUuUb36UeoPBAI3IcZNLmVWu93+AkhyxGDpdauTW5+GH/QHAsHgNRy75mXSsc67T5i2NkSvb/Ph2oCiYabVPxO1hQPBpgkcfNPY6Itm5PZAbe15N1DYBMQEFHfY3w/H/nlTU3O0bp3s78fyMVJfXz9Mr/NoXZdF14sltR1/XvzT7J0ExqTD8eEijrXXO51tQIL7ks1AEmaV6gDkkdfrDQGEWKUeAXLd6fTcBZIKgZOv0rP+QHACYvz2NQ4BDNntAxBj0ulxqvRuGbdmgwpdrFI/7+DvDp/Dcf06K39HLNZXHo+nDVQwMm0xELQ/6Orufs8q1Tz+ONTV1RUacthnZ+2170Kjo6OfvzNpXd2Ftra2T71AUKzSB6H3wWATlzazpEbb/wNvVEY9q5STS+tcPa6ampoeKmQTmwvE/vVaEK2i1GFnMCeXotXl4tLq6uq9t4n9r04wwkIukdKXL0VpnSjdu/cymdwtxOjTealPktY+B3guSl3z0l27npFf801UtDyp0jfFHs1pB0CHJEXrLgYVbZFQQGmppN4AuCFLKlr3U1qDYKW0cimW/xzAOWZVSPeTWqtgobSypGL9PVwrSypa91Bai0CtjU9kSY11KtfyUOXSPXuokumFPGL0MUrtopSXagRgRAoVpYwD3whBngAEkSExVKlTeckWSg/MRYCA1ELv2MC785zjnAucvgYAd9/0WeQMMjf1oxcoMAkELe5/aXHjqFsxDDR5rGQaoMcGI2lpkHDHlpoGd4MEHSs2mBVovg4c55xCpk/1MfHFvunTyBXO3NQXoLGyyUvSLpv+vPzDAMNi/Q/s27dvN6NdbSe2CUgidcrpfw/gniRF68EIkBQJW4DkY49MyjgJcFIhPbj7KJCUCEYgOdajnP5cK5MyDqlojbjoUFrl9OdatIrSQ6ilFh3BRGtdyunPtIfFUFGqpjXhgk5pa+RS1MpDrapCLbmgZ6to56WMaKUOM61cqqo14maJ0lZjUuelqJVJVbVluLUjtbckKdYftShFq5q2gt6IolYuRa0sVFXtWnrbjFpMqtSpqEVpXO0OAbGpaFGKnYpalCbQ2uIcSSKybwovFWqr5ESIguniHKB6ldM/qq1ScpQ+QCE64pLul3L63we4r7S+pY57cQ+nV98ODp4QOXJk8CobGzwiY+oqcTjV9CiNlGfq4F+uzTWFNpcqmlwB5ZZqc2GlzfWaNpeBWl9dan/RimxIs276DVpcYudma3Hlvr5UkwcCTZ4z1gnJUpjC48v/fyriYtvqrAQTAB+2UmZdZZxc5FfuFNLGWEk/GlYahUWiM5YUGawWPX/i1FushqSeOP8C4Fq9QSnJgCQAAAAASUVORK5CYII="},f6b6:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-top-msg"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.curDat&&t.curDat.avatar,expression:"curDat&&curDat.avatar"}],staticClass:"home-top-msg-img"}),e("span",[t._v(t._s(t.curDat&&t.curDat.username)+" got a freebie just now")])])},i=[],n={name:"userPickingUpMessage",props:{messageList:{type:Array,default:[]}},data:function(){return{curIdx:0}},computed:{curDat:function(){return this.messageList[this.curIdx]}},mounted:function(){var t=this,a=setInterval(function(){t.curIdx=~~(Math.random()*t.messageList.length)},2e4);this.$once("hook:beforeDestroy",function(){clearInterval(a)})}},r=n,o=(e("fa46"),e("17cc")),c=Object(o["a"])(r,s,i,!1,null,"f30f60aa",null);a["a"]=c.exports},fa46:function(t,a,e){"use strict";var s=e("4acf"),i=e.n(s);i.a}}]);