[document.querySelector(".breed-select"),document.querySelector("cat-info")][0].addEventListener("change",(function(){fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"?api_key=live_YdzUqo3z5NqyWa5NxNxNq2zLwM5Y3I1KhOqtR5Oaqqa5h0K2hA2RnDNiPzcjnOeo"}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log(e)})).then((function(e){return function(e){var n=e.map((function(e){return e.reference_image_id,e.name,'<option value= "${reference_image_id}">${name}</option>'})).join("");selectEl.innerHTML=n}(e)})).catch((function(e){return comsole.log(e)}))}));
//# sourceMappingURL=index.3f4d0419.js.map