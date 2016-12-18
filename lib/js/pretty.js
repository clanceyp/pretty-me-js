(function pretty() {
    var themeIndex = 22,
        html = document.getElementsByTagName('HTML')[0],
        body = document.getElementsByTagName('BODY')[0],
        head = document.getElementsByTagName('HEAD')[0],
        fileType = location.href.match(".js") ? "javascript" : "html",
        content = (fileType === "javascript") ? body.getElementsByTagName('PRE')[0].innerHTML.toString() : html.outerHTML.toString(),
        themes = ["chrome",  "clouds",  "crimson_editor",  "dawn",  "dreamweaver",  "eclipse",  "github",  "solarized_light",  "textmate",  "tomorrow",  "xcode",  "kuroir",  "katzenmilch",  "ambiance",  "chaos",  "clouds_midnight",  "cobalt",  "idle_fingers",  "kr_theme",  "merbivore",  "merbivore_soft",  "mono_industrial",  "monokai",  "pastel_on_dark",  "solarized_dark",  "terminal",  "tomorrow_night",  "tomorrow_night_blue",  "tomorrow_night_bright",  "tomorrow_night_eighties",  "twilight",  "vibrant_ink"],
        theme = localStorage.getItem("aceTheme") || themes[ themeIndex ],
        id = "editor-"+ +new Date(),
        js = ["//jsbeautifier.org/js/lib/beautify.js"
            ,"//jsbeautifier.org/js/lib/beautify-css.js"
            ,"//jsbeautifier.org/js/lib/beautify-html.js"
            , "//d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js"],
        optionsHTML = '<div class="pretty-me-options"><p>Pretty JS</p><select class="pretty-me-options-select"></select><select class="pretty-me-options-select-type"><option>javascript</option><option>json</option></select><label><input class="pretty-me-toggle-active" checked type="checkbox" name="pretty-me-active" /> active</label></div>';
    /*        base = document.createElement("base");

     base.setAttribute("href", chrome.extension.getURL("/lib/js/vendor/ace/"));
     head.appendChild( base );

     for (var i = 0; i<js.length; i++){
     var script = document.createElement("script");
     script.setAttribute('type', 'text/javascript');
     script.setAttribute('charset', 'utf-8');
     script.setAttribute('src', js[i]);
     script.addEventListener('load', inject, false);
     head.appendChild(script);
     }
     */

    function inject(){
        if (!window.ace || !window.html_beautify || fileType !== "javascript"){
            return;
        }
        if (fileType === "javascript"){
            content = js_beautify(content);
        } else {
            content = html_beautify(content);
        }
        body.innerHTML += optionsHTML+'<div id="'+id+'" class="pretty-me-editor">'+ content +'</div>';
        $("body").addClass("pretty-me-active");
        var editor=ace.edit( id );

        editor.setTheme( 'ace/theme/'+ theme );
        editor.getSession().setMode("ace/mode/"+ fileType);
        /*editor.commands.addCommands([{
         name: "unfind",
         bindKey: {
         win: "Ctrl-F",
         mac: "Command-F"
         },
         exec: function(editor, line) {
         return false;
         },
         readOnly: true
         }])*/

        for (var i in themes){
            $(".pretty-me-options-select").append("<option>" + themes[i] + "</option>");
        }

        $(".pretty-me-options-select").val( theme ).on('change',function(e){
            var val = $(e.target).val();
            localStorage.setItem("aceTheme", val);
            editor.setTheme( 'ace/theme/'+ val );
        });

        $(".pretty-me-options-select-type").on('change',function(){
            editor.getSession().setMode("ace/mode/"+ $(".pretty-me-options-select-type").val() );
        });

        $(".pretty-me-toggle-active").on("click",function(e){
            $("body").toggleClass("pretty-me-active");
        });

        $("body").addClass("pretty-me-active");

        if (location.href.match(".json")){
            $(".pretty-me-options-select-type").val("json").trigger("change");
        }
    }
    inject();
})();
// javascript:(function pretty(){var a=22,g=document.getElementsByTagName("HTML")[0],h=document.getElementsByTagName("BODY")[0],l=document.getElementsByTagName("HEAD")[0],n=location.href.match(".js")?"javascript":"html",j=(n==="javascript")?h.getElementsByTagName("PRE")[0].innerHTML.toString():g.outerHTML.toString(),m=["chrome","clouds","crimson_editor","dawn","dreamweaver","eclipse","github","solarized_light","textmate","tomorrow","xcode","kuroir","katzenmilch","ambiance","chaos","clouds_midnight","cobalt","idle_fingers","kr_theme","merbivore","merbivore_soft","mono_industrial","monokai","pastel_on_dark","solarized_dark","terminal","tomorrow_night","tomorrow_night_blue","tomorrow_night_bright","tomorrow_night_eighties","twilight","vibrant_ink"],e=m[a],c="editor-"+ +new Date(),b=["//jsbeautifier.org/js/lib/beautify.js","//jsbeautifier.org/js/lib/beautify-css.js","//jsbeautifier.org/js/lib/beautify-html.js","//d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js"];for(var d=0;d<b.length;d++){var k=document.createElement("script");k.setAttribute("type","text/javascript");k.setAttribute("charset","utf-8");k.setAttribute("src",b[d]);k.addEventListener("load",f,false);l.appendChild(k)}function f(){if(!window.js_beautify||!window.ace||!window.html_beautify||n!=="javascript"){return}if(n==="javascript"){j=js_beautify(j)}else{j=html_beautify(j)}h.innerHTML='<div id="'+c+'" style="position:absolute;top:0;right:0;bottom:0;left:0;">'+j+"</div>";var i=ace.edit(c);i.setTheme("ace/theme/"+e);i.getSession().setMode("ace/mode/"+n)}})();


