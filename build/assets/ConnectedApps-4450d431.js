import{P as a,j as A}from"./mui-a50be5b6.js";import{P as w}from"./PageHeader-2b351038.js";import{m as S,A as u}from"./index-cacf817c.js";import{S as J}from"./Spring-81dcc22e.js";import{u as Q,T as E}from"./web-70c72b96.js";import{u as V,P as F}from"./Pagination-ed977979.js";import{E as K}from"./Empty-25eec715.js";import{r as m}from"./antd-4509dcf0.js";import"./DocumentTitle-0f80adc2.js";const R=({defaultChecked:e,checked:r,onChange:t,id:s})=>A.jsxs("div",{className:"switch",children:[A.jsx("input",{id:s,type:"checkbox",checked:r,onChange:t,defaultChecked:e}),A.jsx("label",{className:"switch_slider",htmlFor:s})]});R.propTypes={checked:a.bool,onChange:a.func,id:a.string.isRequired,defaultChecked:a.bool};const L=({app:e,index:r})=>{const[t,{width:s}]=Q(),[n,{width:p}]=Q();return A.jsxs(J,{className:"card flex flex-col gap-4 !pt-5 !px-5 min-h-[182px]",type:"slideUp",index:r,children:[A.jsxs("div",{className:"flex flex-1 justify-between items-start",children:[A.jsxs("div",{className:"flex flex-1 items-start gap-3",children:[A.jsx("div",{className:`w-11 h-11 rounded-lg bg-white border border-solid border-input-border flex
                         justify-center items-center`,children:A.jsx("img",{className:"h-9 w-auto",src:e.img,alt:e.name})}),A.jsx("h6",{className:"max-w-[165px] w-full leading-[1.4]",ref:t,children:A.jsx(E,{text:e.name,width:s})})]}),A.jsx(R,{id:e.id,defaultChecked:!0})]}),A.jsx("p",{className:"text-sm flex-1 max-w-[300px]",ref:n,children:A.jsx(E,{text:e.description,width:p})}),A.jsx("button",{className:"text-btn",children:"View settings"})]})},Z="_button_1xpwa_1",D="_text_1xpwa_7",v="_active_1xpwa_11",c={button:Z,text:D,active:v},U=({text:e,qty:r=0,value:t,active:s,onClick:n})=>A.jsxs("button",{className:`${c.button} ${t===s?c.active:""}`,onClick:()=>n(t),children:[A.jsx("span",{className:`${c.text} subheading-2`,children:e}),A.jsxs("span",{className:"text-sm text-highlight-inverse",children:["(",r,")"]})]});U.propTypes={text:a.string.isRequired,qty:a.number,value:a.string.isRequired,active:a.string.isRequired,onClick:a.func.isRequired};const N="data:image/webp;base64,UklGRooCAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TBYCAAAvLoALECfEqI0kR7X8qd43Tuii4bhtI0ny5p/p/u+qMiG0kSRJijv+vI7RW1VtI5Gk7AwWRf9spMAyHxJSSCGFdNKkUghCIUSAHkWYIII8QghBPil6lCB3AsvsMcwshQc59o6yd0T6BIognOT5/Jo9CuEkc+hR7te3lJ5/SID4wGZ29SxQswgpJuljqf/IHRND/1f6pBBSvu+fnhXMrv6vmgFOPvzzDzGxBLurZxnwoWfVDGBI6f/Ss33SJyV9hFCAiaVmiNlDUPYePYoQiAnhen7t3n3PDGBLkmza6mP7nGvbtm3btu3bl3++vS6eI/o/AWaYLNbPr+9YXHyCrvFxUb/HDtUms83pskNcE8Q2QWwT/nO/vV0w+x+R06e6RNLe19dtgOOIKu9SAVSQZKs2pwI61YwCwJ7kOkk/R/+AcjqALvJ0lxzXT2vwhGwqeORdqSBT5IYdM+SKJqc+ufd8zwcSb8kGDS6dFslpAGghryIGRNLkGz94kyEJHpIjBpQ/yD+RPZCtfOVdsn5YpeKxTw7z5LIBGfsH8nVQzLola/TTGgCAXnI7IkbZhCR8xrdBNXb9nDuvhQBQT16miNBGLkmwRs4KkH5LtsoUvZDFejSPqV8g1yE/RG7pkPlMrS95CknnfOvSNkfNk1BuIy9CWty1VVqrE1Vgk6/DMk4lg7M7Olq9IqkUzv7bmQQz/Xb41U2i/f5QU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA1QYmVXARAABQEAAAAAAA==",h="data:image/webp;base64,UklGRgoFAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TJYEAAAvLoALEDXJzf5/dZV5cF+Ayq2mdHd36J3WoaJ1d67HrrvHXY4kOck5XXL/B93CYaO0ZxO6TJFBqZjh391htKLMGMygv/oOwQDXfvP8W4bJCBAkSTZtnWv9Pf/46zCebdu27fd58ewDy7bttM1DyYpYrinmwm87/8nV9/+fAAVAtSoA5HKQy4Gqczl4HatACAp4opqkDbd186Z0vzExtNVzUZADKpEh9C9sg2lvMG3r4kNzObVU0oZ0X2/b6nRHaztUbk8FPlUg33BnkeYo/EumwP9MRiDKAEbW3ORYVzqX0QNHJKV55nZ97KMMIVD5DLtCkiltOUPN2UjzVFf5ikkNmBzL1mJJqbDWetO+WL+XTritXJeY9wWKO/dtUs1aT6t9Y0YG096Rywla4/7MQtnZP+sqN4iM8oI22rexI8a0Tnv2f3XJgKWRm5sxk040X3bnJTkgXbBrGDp6cXgnKZMRTJl/4VZ6lgyJGC3r6JaDpZ7WJ4YssuV67bHCO6+NzPNkV+7HBIhuqAyen3XafQpIpvKU5wGocC0FQbP+ply/wjavsC3by2We/PMAGDV7qhlM69iGJkaT+fzk84qgt77LR4w6/T6+wa7+q6vnh9e8UHVNgc6wT2dM1neR10hChrBAcRyAMs9SEDWrdM8txbTc9l5uW5preb78zqhOc6RMb9pKGwokkJPMFLRWyqZEXwaYX5v/mlP9tnybrzj7pi77X+ZYI/0qQ0zG3or7afyIH799jW5pX/yKHYPY1oqlA2XK5Vkgu3O8pKFfW5AkIwKdj16/xk8YOF5XhcaxC47tMWWZyFYWqu+2Zor10eHl+7/VvjmQoa3F2tzJAbqqfONi9V7cytro2GRb6zVb99in2Fporzz8rksMkQxQgZdNhTYtI1CUJC/ZkT23tWOOt1MUPQPf3vPDW/4TSCnXZ7V/aLLshTVHAA0gesJ10aFOf/wOyXYAAAt8dQtln4t1+/Zc6R753rHbVqlL7esnjz/tjZiCGrKYDf7bjlbclOk3pj+aq2ng2+4CJIcZAABUwH9ABABAJCUCeIwMj5PxfczOQj0qrxIu1qP8GBEepeKUA6F4i3CbMU3Ki9Ax7DwP7y5kh1dwFzfQ9URuGUapF+ACwh7FzatQyQEYAXDC3XwNVSKpaewUzxP+QTINAzyHGe6lym8KfPoRPJmbAlzBuhvodio3daCc1FRm6kb5Grq+hL9eJMPp7HgJVc9gh9QP8A+AxUx/EdOfwUxPET4hHsEr6HY10z9Mxn0nqbQa1TGAN9P1GwHBO+gSJIAPUTmaUTlACAEQ+xhqgAAIiECSyVcYknRXkNdd0h5KRxzZ0+iZSycY+De7pCNlQd4M76l0wrErDopmV+RAexKiiUFE0uZW6PpyQ1+m99e29X1H/9VcKWujQ/+f7Zm43J+ui/YFUVo76Qf3xLZ2fffIF350RWBsH/kJJRs7UHFDo3vqGrqRA/fM7eCfGRRt76Ir7rh72P0Q+jG5fx0SzQwvSXEtnUP/i+/bDv5pAlmqMVQgZIwhosa0AcwiQ3iWFQDUpvqc2l5ScwC0g5MCUFNBSU4AAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAANUGJlVwEQAAUBAAAAAAA=",j="data:image/webp;base64,UklGRmwEAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TPcDAAAvLoALENXIuq3tkJy/ENu2bdu2bdu2bdt2MrYntm2jqy665+uvw1vbNbHeGLXyxEaFQNLG9+/8GUjbJt39a77Ctm2b/99N0j04ASKcFsCqAjFCW5HPcGwuLCvQSwpFghLVRC0JUVIGy1KAdEdzJbfx24RrKvz1+kt98pjupmwJXfyYsmZp6Iw6iZcmQ2MOFQilpTFIkH14lbbx1fSRA9DNFqRpQj6GAvXSpXEBAMkAPp+cZy90QDsQ38Rt1gs0Po7ftCiG2A0C1iF8pD974wa31xWbUM5KQPPEUrpJUrybSM2gINAiBIlGAe524rHRgwjWNWhdfJjqjUoAPXHb2AYvSt7kM8QEzELQpoYAyFvyF4mTAzw0C0UbMiiKiQEcxd+zFpzqlDQC7VtIxHIClKgMKpwyN50Kh/Vw1VgXoHYpLnwoRjMDHJDMtBKgn8QvfE5ENbY94lC0lBVgpERtGIhlF6IWux7QHvFKyibro56llEFpqFeRW2WKFiqw7Md/gwAaSaSmVWkM9booDfUXucVLaRmEq/ELH8pWbgDG4qlZDTBvhYvGRkANSqlgOACmRpGkAPslWOkmTAKcI5c9gJSwDOnxgS1urxWgH4KUlT2WeeG5GS6ihznwJ2uE4QfTHiSSmo0EAXkjRrMCTi1DuKdCA6BcySrECQbi1lgGsFHSFT8yMnYAEECbMCACN0XKJ8A6vDV6Al5UoAlbdgL41LF4LKFKvuLcUApJ4OK7tJHdAayTCOYVuOF1yhK+WQ+AdsMk2kblUlmai6n8ALBQopSM8YON2LAZaYvfxlkC62Tjs8kq2wFd4HV18fqUl4UiEQCC/KxI8dW0kF0igv0AtAIMIl7x0CSTpjKp2IUdJkozSVnclJRiEwSdgRagbklWQjf+5HbwkqI0K7ME2nMBQDuwGZuWHePAAjpodCgdIhthgk0gAhEAwonPmgiEpThhgPkgYiBNRdAeXfC1CVoDv2vBHotRDZ9HIgM2owGUAbBBN3x99Y/iwhATYAlr1MSJhZBltoyYjem4WAaVcL0kJqMTHuTEVDiiBXbj5S40whj8XYhymIIzpXH78Y+6kCviXVMUAJspnrxVoQcGg87Owq11+LQEO9EK2zAS9LIOHkvdMQIYBXNYYBHm4clcrIEehkMDRL4GdSKQRqgTAAJARABApEFhAbAAZz5L87ABa3FiCy7eu7MfuL4Kb+593oSLZwiMIk+Lm3swDa+N8ffBheXQw0UD/BDx4IEZ7unj+AwcABhJgcKkcxL4Vw8q+iiyruIgpo83RK4CQDkoBEiSwBLpIkeBuqIoChGRJEnSmTNnfvz4sQ+yLO+F07L844yKLVAiITI+XgUAAFBTQUlOAAAAOEJJTQPtAAAAAAAQAEgAAAABAAIASAAAAAEAAjhCSU0EKAAAAAAADAAAAAI/8AAAAAAAADhCSU0EQwAAAAAADVBiZVcBEAAFAQAAAAAA",y="data:image/webp;base64,UklGRlgFAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TOQEAAAvLoALEDXRzfZPkRzFI+YEZDHZMpmZWfJZLkuWXGbW8tAy8zAz9WyVOaqSgmAGW8mM25nI26eD2EAUmqwLYZ/yFAxaZ04YFwP+bUUg6wIQ/eMp94LpECBItm3aOc/KnFMZh/Ft27bN2Hn49oVl23ba5qFkRSzXFHPht53/5GqFbds2/7+bpHtwAigAXinAB50CXArw9F4K0LgBAL1X0yjA4QlA0zW+QOvlTOcNdN5ulRQBoPBAnpQFcwyzlnyvOTNwtLOEJL5xQhAIflgm285k2zSkB9Z6YmskTfme0bUxmA72fkBPD4oeHJATeldiOMT/haTonyQYQAIgNWcWz6rau0hvGCIr1fduNaY+EARAkD14H1EMZckkqu5OUqC7kCNi9c3iWbRXCyHic2W07UrNO2WHOupVmX1XpLlFvw2h2ttJbWgk2WC3/8mJSkqN/hnFqlPwrUNPAKWIScrs3mS2CLsNxlPwq8MGbJ3M2o2ksiOFqltMEd+UA/JMA9coSq6EkARDQgY/nOrAQiITs2OVXjKwtZPGzECmlsxoPFQFZ/WJWYHqEv0xANILQuDx0mDc5YBlrkB7+gZVvkVcUvJLS6lX5ZpVuRad9aJA/ekbmA07oZpsq8yCMHl57fGCYHS+kS1Cg3nXtUCe8Ytn5CXnrFh3yYHBsuvusTjfEqJCFgSBIs3hG1QEFnFZyWr/zFZNKl1vla6FtZUVqm9SGAwHIY22jbIgwBKjipGD9kbRkukRQLG58V9rrtdRbgo1p8CrI/+v8KxQvCUIZSGycfaiL6Jri67efUkvyeeuI3JNIkcvUjZE0sOjSHWLikJEfq24IiQTeHfl9kvXDkFUVDWxUeaAMmskZE9qKYr1N0c3wcbk4Oj5n9rQDNiI9mplHWQA72tCo1L9LrEU9cmRxbUyGjbeZ09ge6U5dvGrITNANiDiomipNN0EAwlFxBQrtWaOfhQVrZxA38Rzjrzkkv0JrOjxURseWBy7+JwhgAqQ3qGG5MBgPvwOWWcHIENfnWLVp1LTrrNUeJ88/7PT0ajK3atrlz+cnUgAj3nMh/8tVy9qKfSa8x+szST0bb0HZIc9AABI4R8gAgAgZiWySQDYQQc76egiYeWhERfHKQcbcbaDCrYzUc6FETxDOa2EyiprP0b68bMCsjOZHxwjHVzEVoOFRRInfkBFlNVHmNXgIgogBWDQ2WweUyCrEfwED1LeZjpJAhrHDdYzxW8UPYIYGipMAI4RnUVsM1yYuHDGajg38eJsHlsdIV8O08FIfjSNqUbxAxEE9AfAVK43heuN4iZ7KI9RDEOz2GYu19tKR593M0ktrjKAlrLVoziGVrEFKIC2MBlacfGNEQIgfpaoAgIgIAJLSY4goqj3YVG9V9ZA2aLUmqT3TNmB0L/xXtkSGRaN5JooO5Q5orBsvE9tyMcbBylFWXuB58uJfBn+X8sx9lzjF2ujqE8Ogn+W78WJ/qmGZC8uC/sgeeZ9sexDz/vkxX9UVWTkfPIYZDYksSDpNfE8OakN831Y4T8jLFv+z05ixbzTzrPIjxH9VxHZ6IkpIjEX7qn3OvBthf8Ug7xQJVIEpJSIqEr1G+ZRItzMFODzpnEmKMDRuRIE4H0FnsVdCtAowOZJ3KUAQQH6V36EIADnzavbms6Lrt2mAOt2r6YDUFNBSU4AAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAANUGJlVwEQAAUBAAAAAAA=",k="data:image/webp;base64,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",M="data:image/webp;base64,UklGRt4DAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TGkDAAAvLoALEOcmIZIkR5Kijz/RA3Avu9NfkIDQRpIkyXP8gR6Bf7ozHESSJDRzEP+uIuqBm1HYtg3iwf8X0xsc1IcPH74okISBLiSgkCxUCoAcURQhERJFWTjGFqUyqKxUiCEhlhVDsmUhsQXuWULhTfesTYmSbFrj/r+IYEErdVmJDqyUkvOM++re1xo7SkAPMo58fR2RIiTSu0hMSxt+/b+SN1UE4ff7SDYwfv0dpt8n0ZsK94q8swyohrQWuP+LvCvl3lURNlUEKbHb24tBSr/fz6b7BtX49R7SO0A//17JyjuKhF/vsiXsrjdEwCIlSqHn9raSE7hIJQEQg0IKSQUUQEYhSXoAMgr/gQMe/G+QQpKcj3GMj4+fz8+/5EAh6YGQMHal3KOf/wfob9t2vJHu6h3btm2bHU/Htm3btm2td1Td72b3HTN3sPxvosm3+jWi/xOA/5QpXvN+itfSPJZawGMphT2iGCgMCAgGA+lxAhAUCATSY0qIC/ij94iRWXH2Kw0h3G7UyKyYwzorlgGglfkv4nV5yz5LPe+9fPkipvt6QnxF7j5j/OcKQgusZZyvN8dn9nyKzy0W1Onmq3hezIgVqQ6PSWZfnDwwM7JLIQBoOGhgZuaQ9RHPT1aLD1qXbembKAgChEhBkoKHHemGKwHUuULmj4GEOCUB8q925MGiCZlpr8mzPZo2aRq7ZgAA/H9esvy2vZCoKp4msz++e/c2+vs3j2Z9jliSQ99yITF/1ifSWVprSdK67DvVAbR+SHuhAaREYArtZEzLqN81hjK2Z9NNN/ii9abOnRN17f0ou8JAqyfkqfKhLwMhemh8ruVPD9oYoNb1Xz70EZIr1b3t6JYaAKbXmrFIurp+b3m+KiLlV/J+20G6SRLCCsGD4cHW8WjhkJpt2tbWC+WP+/hNN8m/z/681yRLwOzXtBsyhAE/0B7ISBbU6LLlrRZSiRPWPe6PxE0i/hXZ5CJBU5z1bTRJU6mr5LOOUO0b9F1rqeQVPEJyZihjFV32QiFpUHeST3cfcjb7TH148dct1lpGjjNeEJpfdST5+lhxeQEw830k7Y994RHUOE06bi0sr4RGPyO/aiLPoOR+x3kGHv5r0tCi8tL/YGOK/f5HmbLlKlSoVKlS5ahVqlSuXKlC2T+KmRSkRAEAUFNBSU4AAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAANUGJlVwEQAAUBAAAAAAA=",B="data:image/webp;base64,UklGRpICAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TB4CAAAvLoALEIUcWtsOSaoeI5rZ3dDeiKFt2zYj27bt3dC2bdu2VfX/3xN0deFfxBFs20Zy1H+dH9ns/P0PJwAeRYj4byWm8QmzCNvHRT1lly5NunRp0qUZJiDIB8+bpUgQL0G8BNGDBCU8PZfJ4nEAE0ayGFaTadWY1o1pxyQyTOvOMPw2U4bQNG/AQxus4H4BhBEAusrFNZ9q5nklCCWAZiyxi7jFMEthNsMsK/hzhNSVae2Y1hfwizcRUsRJWhfZDfGDFy2kpsQZEZaIq7wothAi4jT1DB5IZMnmJS+OINbry32siwQgDunnOOFFCSJc47S/nHD55Jhr/H0GYIMTArqtpokaWsGPaEAAz70U0EaNPIcfhDJBE9VNAxxRW2PNfSCqyaKBl7DYDhAj1FfZIN9hv4baK+mmWL+sUENhs+G68lZYoYTPUNFH+ABAOQBm2giPNSMwwAFipwFw0RixTjlJu60snFfZCeccpqCup/CM8PBEfbbvBjtI7DQDHhohygHgtpaaqO4w/LZAYy2NBJzVTnO9fAO0AmCFvYDFmmhgJA1HLYBHZopSEP2DBgDKbwCg/STgWbHBq5Dt4tn2jMBnP+CLDwRElHchnyzh65J5zjjllDMW2+yIdY5a5Svhi8X299Zxt9zyzjvHXHPXLTeNcB18MflhspCfTUwSEhaBwZr+GfwwViiKrhQW8SSE0DRNURSHq82nU/UpBy+DAFBTQUlOAAAAOEJJTQPtAAAAAAAQAEgAAAABAAIASAAAAAEAAjhCSU0EKAAAAAAADAAAAAI/8AAAAAAAADhCSU0EQwAAAAAADVBiZVcBEAAFAQAAAAAA",f="data:image/webp;base64,UklGRrYCAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TEECAAAvLoALEKfEoG0jSdnjz+lofTMJDYZt24ZR//9u13RbIjloG0mS0lr+WJbePVUVBG3bxtvOH/ITZUBAQEDEC4CAT2wAVAAlQKAWIQGOqQSih8X/R0pLlSrlrHArxtVahZ0ogAKkwns/VAWQQgc0EwXQ7BBwOtgZUiARE/Cv5/0I/G+USrs1f9SUXAV0XMEE4HBEcqcwEzOV0Pq/KJlAuzjU/5bMWu7Q+b6vApwSiDBTNm4F9h+tTSiYOqECqFRyZFPKUaVKu7UOIUSAQwAFOAARAtfB4dzPC3QAAQTZtm2bljOL1xXbVsW2rcqJK7Zt4955cH135Y/3rJaz91PyFtH/CcB/4Qmbt9gbCp6YvZTX4Gn/fVFd78tgVbwf44m5QnkMns75LT7P8OVETZxrezLwlnIZ3PYteKCvx+Jxv6P25Trt8tKHYiccz/pFuzqc2Von+WWKo86BRMTLMf4TyQsdN6bwmnb8dAQ4EjJcArd9e1oi2QFg+nc+Mo7yr2hX34wDgPPV7XDb2RYLHjbWvI+THOG2Ku9eJfcbR/NrlDd/VKtJkiTPC27MxYoaHA5DkoxWu5n5k/JeZi0Fb7kw5hBluKld/EBZXuQAuZfq2VjgVCx4vONgI2V1VwdY0VRfJ6eXuaveTQSQeaLCfemtoz5qAOBgIviilFbmTsWqVWbDnvpNcc1ISnMbtKOrRphLrFatG3/SMStPB/bZhQqLzwwNBUEQnJyWzr/eLs+6fMpkurvw1xlZGL1UKoyayfb2dAEAAFBTQUlOAAAAOEJJTQPtAAAAAAAQAEgAAAABAAIASAAAAAEAAjhCSU0EKAAAAAAADAAAAAI/8AAAAAAAADhCSU0EQwAAAAAADVBiZVcBEAAFAQAAAAAA",x="data:image/webp;base64,UklGRmACAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TOwBAAAvLoALEA/EqG0kSRn+YPc1e3dCw3HbSI6k3vxj3Zc525Ljto0kSb3557rPOXarKCAo8n+0KENTAREKR+BYALgULk3mN2woQeKuCLDKBEABjIq7AEodtQJKRZn9iyz4f2MclPf7Q1HcIWRyNaH1fMb9uhCRWu/np3AD6Aoqup73C9a+bpTj/FK+78+/f8/rZWt25AEjAgcxjowuIBMhGt7Xy8A0KMT8x7goQAQOSgAwaWNQbFSIJDL7Q4fx/wcFoACLNIkA8MEEAxhg3dZ2NvpSux3btu2ObXZse/Kmbn97MPly2aunEf2fAJZhW9OoWGjXUtQINPl1cmxH5XRRp8G5GAXCfXptkfJ5nUXFfkQAWnnhtNahVJ8k4MfHDaEqs8y0QADWTQ4OiXcZzioYYBuLyabNjENy4FKGk0pmHv0lAPfljEe0umVePjfYvZwiQMQM44LH0MjBzS2evkl5xcUJuBu//iPlqHRcyriJVxMPKqmlAjM/pG4mHxSkoJVxVIqngdjd1LMMh2X8GjzZbNbrbn+VSXslDk5SNVPueCH5frFRnJ1vMnE3zyAOdH0kCcBOvskQAHreIwSIG7l2g1h6P0m+FnDos0kANMHR/5UCErQaULNosQ0FgdkcTbC0DSs2q/3fAV1NyDQUjAZQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA1QYmVXARAABQEAAAAAAA==",b="data:image/webp;base64,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",C="data:image/webp;base64,UklGRiIEAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TK4DAAAvLoALELVIu23b2Ju/UNu2bdu27Ta2jdq2bds2Y9vO+wTv05v71B9tnHLXfQgkbXz/zp+BtG3S3b/mCwiK/6NpAhLwSFVY3LFQhkXTUsvUKs0wRlaKCyBAOroufU3+pkKj+bfgr+3pb+Ya9VKm5DWqxjkkoxmSrenUnIACBBWxgQBBYnEC7Zpczed4SBOMF6WfQwJllWJTAECBg8j99DoxkIDC0dDUb/wEoirSsBlXDiEKAgBfVIyOJyaEhZsgWk0ZxwMQ315UmmYlp6nSrAgCOaJYWAe4n5fMzX4kgNUbE0suY9AoBNgv6ZtzwYtaNgMMMQFXULwxFAD9y8CiAAuxXESmxkFSQgeLfNQAl6TA4wMWZtPSTpDycVK5RAHUpKwoLMTStZlROPghTXOmACZlpPChWs0+cEALM0GAJdKw8Hlc3ZzrEYfhRU2A9VK94ROJ6uV8D5iKBqV10/1R7lZUoQJlXXmrWvjFoVZzMABrqdJMKDZQNoMKlL/0lWxlfBBWSsPCh3qU18ARydJ4AcwhSNWcFZBlGROcrKNZAeKkRJkjTALeVC3RgAKNy6oeH5xDmsZHgCUoVjx6LDcia7NWEjxcQwHxFpY3LNFoIkbNG1D/qNW443auqPBoNgDUS3chTjgo6c2pAAKkQ8kn6yMcgAAKxLIo2gwrIQDORI5mv4AXDWrKlwgAP6eXzKVMGVCsxUqGSNGSt0ySqEgAfKWS+QpuiEDrUrHxAyAgCkdjcugUHRkrxyQOABykWukcf5goHmwIQvuSv3mjAFh3mtxNdwlDAqTAVwPJ/miIg7yhBACEWFzDsJKnGSeRkgBpgIPRoGRqWoid7Cjn4zy2i720LulKazkbBMlAt2BWWpSyTQF5V7K0KvbliiDlXABQOIIQuISP+AV0x0h4twTgKAJBBCIAhMeOECMQXPD4IG6CiOWNyFBMxSxEwhYTkYB/xrgAJ+jj13p0QhAsIS/DWczB76//BdTHIWzDKZyBER47QA+6ECORjriKvXihCm14YDR2YgY+9MZuXMI4ROFLJKyxCf8doI5diIcKgrAMf8zwXQuwQ3+wHYEhzkCBeVgJenYFh+ALSzgjAhMQivWgL6ZYBgXmYh2wASdwEo64gU/X4Y0DWAuxBBZRJgKJQpkAEAAiAgAikQQC+y3E49ebm/CHDx4H4104HBAHvPaEG947IRDvnhIYZZntCqKxBxE4ihv4FgR3HMYX+Q/O4+lpfJVd8DkeYMKDvyzLJCkA+TZQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA1QYmVXARAABQEAAAAAAA==",I="data:image/webp;base64,UklGRhIFAABXRUJQVlA4WAoAAAAQAAAALgAALgAAVlA4TJ0EAAAvLoALEDXJzf5/kZR6cG+AyC0mdHd3yJ3UISJ1d87Xzt3XXUZ2d3Zn8L3/YGU4dLTpdEK2VVxjdEJEDf/sitGIcMugBv3FVwQFnPCr559SzJYAQbJt0855VuacyjiMb9u2bcbOw7evLNu227Z5FSCEDopN7C6/yfwnZwoIiv+jaQIUACpXAAaAjJpUnslk1PWSqiAACjxQTdKC2YZZXaFXl3mzdTJREr0qkRHwf1gG285g21SlB+Z6YmkkNfme3rXRmQ7WfqCcHgp6qEA+obY8w0H4F0xBf5iMAZQBRObM5FmVehfRDUMkpXnererUm4wAUHkP2kOKIS0ZQ83ZSbJ0F/mISPWaPIvGakGpMFd62y7fvJN2qKleFdh3OZob921QzdpOykMjRgZT3ieHk5TG/Rm5qpP/raOcADLKS8ro3sS2CFM648n/1SEDlk5m7kZM2pFs1Y1XRK90QK5p4BhF4ZWgTMYQZf4PpzSwYEjE6FhFlwws7aQ6M2CRJdMbDyXBWWVilqW6cD8GQHRBZHh81Bl3SSCZzNKeeqHEtxAkxXrqSr0S16zEtWiuF1nqL71gNOyoZrCtYgtC5OOdxwuC3vkhbxHqzLv4ArnGL66RF56zXN0lCTrLLtVqcn6IokISMgI5mkMvFAUWgqxYqX9mqSbFro9i18LcyrLVN0Z1hgNlettGWhAgiZxiJKGxUdRlejIgfm78rc/1mspNtubke3XY/yLPCukXGSEy9l7UQ+NbdPvuW3RJuuNH5JhEtl4kbQhTDo8c1Y0TBQ39WoIiGBFou3X7Lb5DwImqLDaKHVBsjShrjSxFrv5m6yZYnRycPv+vPDQDsrSxWpkHGUB7WWiUr9+JS1GZHJlcK71h4372KDZWmjMX/1RlBkgGqCCKukqTkjEgKoJXrMia2foRJ1pJip6JZx954SX7AaSU46M8PDA5dsKcIYAGEN2hquRAZz58AxWywFcnV/Ul37RrLhXuJ8/77DQ1qkL36s7lL3snopAwbYk0poP/lqMXfa7Nv5mbSeDbagdMLHFsBQBABf4AIgAAYiI0IRHAPjrYT0fXCSsN1bg4SzlYjbN9VLCXiZIOjOAlyqknVCKJezEyhJ9lkZ2Z/OAM6eAKthopLMI48QLKoaxBwqwMFxyACIARZ7MlTIGkxvETPE55O+kkDGgKN9jKFF8V9PBjaLQwAThDdFawzVhh4sAZqbHcxI2zJWx1inw5SQfj+dEcpprAD6gf0HeA2VxvFtebwE0OUR4hHkML2GYx19tNR90HmaQcVzFAq9nqlYChDWwBEqBdTIZmXPQSQgDEboYaIAACIpBk8hGEFNUeFFW7tAbSFkXWJLpn0g4E/o12aUtYUDTCayLtUOyIgrLRHtmQzpaDiKLMvcD15YS+DO+vZRt7jvGLuVFUJgf+P8vz4nB/qirZE2RhHSTv3C+Wdei5nzzhR5VERvYnj0BsQ8QFia6Ja+pENszzbgX/jKBseT864oq5p513oR+D+1ch2WjlFSHOhXPqffJ9W8E/RSBNNYYKAowxRNSY1otpZAgv6QrAansm0ofjAJ6cUppRAILMQwBQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA1QYmVXARAABQEAAAAAAA==",g=[{id:"app-1",name:"Tracking App",description:"Real-time order tracking and a list of bestselling products from the shops",img:N,categories:["marketplace"]},{id:"app-2",name:"Data Shop Foundation",description:"Run Data PPC campaigns and adjust budgets, without leaving  dashboard",img:h,categories:["marketplace","finances"]},{id:"app-3",name:"Optimized scheduling",description:"Real-time order tracking and a list of bestselling products from the shops",img:j,categories:["marketplace","finances"]},{id:"app-4",name:"Target's robust App",description:"Target Wallet that allows users can save their payment information",img:y,categories:["marketplace","finances","development"]},{id:"app-5",name:"Inventory administration",description:"Release calendar that neatly organizes all the different drops for new shop products",img:k,categories:["marketplace","finances","development"]},{id:"app-6",name:"Employee management",description:"Manager of a brick-and-mortar store to use on a daily basis security transactions",img:M,categories:["marketplace","development"]},{id:"app-7",name:"Shop Email Service",description:"Real-time order tracking and a list of bestselling products from the shops",img:B,categories:["development"]},{id:"app-8",name:"Offer online customer service",description:"Automate your daily business operations and decreases the effort required",img:f,categories:["marketplace","finances","development"]},{id:"app-9",name:"Digital advertising",description:"Referral advertising",img:x,categories:["marketplace","development"]},{id:"app-10",name:"Crypto Wallet",description:"Cryptocurrency transaction operations",img:b,categories:["finances"]},{id:"app-11",name:"Tracking",description:"Real-time order tracking and a list of bestselling products from the shops",img:C,categories:["marketplace","finances"]},{id:"app-12",name:"Target's robust App",description:"Target Wallet that allows users can save their payment information",img:I,categories:["marketplace","finances","development"]},{id:"app-13",name:"Inventory administration",description:"Release calendar that neatly organizes all the drops for new shop products",img:k,categories:["finances","development"]},{id:"app-14",name:"Employee management",description:"Manager of a brick-and-mortar store to use on a daily basis security transactions",img:f,categories:["marketplace","development"]},{id:"app-15",name:"Shop Email Service",description:"Real-time order tracking and a list of bestselling products from the shops",img:B,categories:["development"]},{id:"app-16",name:"Online customer service",description:"Automate your daily business operations and decreases the effort required",img:h,categories:["marketplace"]},{id:"app-17",name:"Digital advertising Pro Plus",description:"Referral advertising for your business",img:x,categories:["marketplace","development"]},{id:"app-18",name:"E-commerce Crypto Wallet",description:"Cryptocurrency transaction operations",img:b,categories:["finances"]},{id:"app-19",name:"Content management",description:"Real-time order tracking and a list of bestselling products from the shops",img:C,categories:["marketplace"]},{id:"app-20",name:"Target's robust App",description:"Target Wallet that allows users can save their payment information",img:I,categories:["marketplace","finances","development"]}],T=()=>{const[e,r]=m.useState(""),[t,s]=m.useState("all"),n=i=>i==="all"?g.length:g.filter(l=>l.categories.includes(i)).length,o=V((()=>g.filter(i=>i.name.toLowerCase().includes(e.toLowerCase())).filter(i=>t==="all"?!0:i.categories.includes(t)))(),12),d=o.currentItems();return m.useEffect(()=>{o.goToPage(0)},[e,t]),A.jsxs("div",{className:"flex flex-col flex-1",children:[A.jsxs("div",{className:"flex flex-col gap-4",children:[A.jsxs("div",{className:"flex flex-col gap-5 md:flex-row md:justify-between",children:[A.jsxs("button",{className:"btn btn--primary",children:["Add New Application ",A.jsx("i",{className:"icon-circle-plus-regular"})]}),A.jsx(S,{wrapperClass:"w-full md:w-[326px]",placeholder:"Search Application",query:e,setQuery:r})]}),A.jsxs("div",{className:"flex flex-wrap gap-2",children:[A.jsx("span",{className:"text-header",children:"Applications:"}),A.jsx("div",{className:"flex flex-wrap items-center gap-y-2.5",children:u.map((i,l)=>A.jsx(U,{text:i.label,qty:n(i.value),value:i.value,active:t,onClick:s},`filter-${l}`))})]})]}),A.jsxs("div",{className:"mt-5 flex flex-col flex-1",children:[d.length===0?A.jsx(K,{}):A.jsx("div",{className:`flex-1 mb-[35px] grid content-start gap-[26px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
                             2xl:grid-cols-4`,children:d.map((i,l)=>A.jsx(L,{index:l,app:i},`item-${l}-${t}-page-${o.currentPage}`))}),o.maxPage>1&&A.jsx(F,{pagination:o})]})]})},_=()=>A.jsxs(A.Fragment,{children:[A.jsx(w,{title:"Connected Apps"}),A.jsx(T,{})]});export{_ as default};
