(function pretty() {
    var themeIndex = 22,
        html = document.getElementsByTagName('HTML')[0],
        body = document.getElementsByTagName('BODY')[0],
        head = document.getElementsByTagName('HEAD')[0],
        contentType = location.href.match(".js") ? "javascript" : "html",
        content = (contentType === "javascript") ? body.getElementsByTagName('PRE')[0].innerHTML.toString() : html.outerHTML.toString(),
        themes = ["chrome",  "clouds",  "crimson_editor",  "dawn",  "dreamweaver",  "eclipse",  "github",  "solarized_light",  "textmate",  "tomorrow",  "xcode",  "kuroir",  "katzenmilch",  "ambiance",  "chaos",  "clouds_midnight",  "cobalt",  "idle_fingers",  "kr_theme",  "merbivore",  "merbivore_soft",  "mono_industrial",  "monokai",  "pastel_on_dark",  "solarized_dark",  "terminal",  "tomorrow_night",  "tomorrow_night_blue",  "tomorrow_night_bright",  "tomorrow_night_eighties",  "twilight",  "vibrant_ink"],
        theme = themes[ themeIndex ],
        id = "editor-"+ +new Date(),
        js = ["//jsbeautifier.org/js/lib/beautify.js"
            ,"//jsbeautifier.org/js/lib/beautify-css.js"
            ,"//jsbeautifier.org/js/lib/beautify-html.js"
            , "//d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js"],
        optionsHTML = '<div class="pretty-me-options"><p>Pretty JS</p><select class="pretty-me-options-select"></select><label><input class="pretty-me-toggle-active" checked type="checkbox" name="pretty-me-active" /> active</label></div>';
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
        if (!window.ace || !window.html_beautify || contentType !== "javascript"){
            return;
        }
        if (contentType === "javascript"){
            content = js_beautify(content);
        } else {
            content = html_beautify(content);
        }
        body.innerHTML += optionsHTML+'<div id="'+id+'" class="pretty-me-editor">'+ content +'</div>';
        $("body").addClass("pretty-me-active");
        var e=ace.edit( id );

        e.setTheme( 'ace/theme/'+ theme );
        e.getSession().setMode("ace/mode/"+ contentType);

        for (var i in themes){
            $(".pretty-me-options-select").append("<option>" + themes[i] + "</option>");
        }
        $(".pretty-me-options-select").val( theme );
        $(".pretty-me-options-select").on('change',function(){
            e.setTheme( 'ace/theme/'+ $(".pretty-me-options-select").val() );
        })
        document.addEventListener('dblclick',function(){
            var n = Math.floor(Math.random() * (themes.length -1) ) ,
                newTheme = themes[n];
            e.setTheme( 'ace/theme/'+ newTheme );
        },false);

        $("body").addClass("pretty-me-active");
        $(".pretty-me-toggle-active").on("click",function(e){
            $("body").toggleClass("pretty-me-active");
        });

    }
    inject();
})();
// javascript:(function pretty(){var a=22,g=document.getElementsByTagName("HTML")[0],h=document.getElementsByTagName("BODY")[0],l=document.getElementsByTagName("HEAD")[0],n=location.href.match(".js")?"javascript":"html",j=(n==="javascript")?h.getElementsByTagName("PRE")[0].innerHTML.toString():g.outerHTML.toString(),m=["chrome","clouds","crimson_editor","dawn","dreamweaver","eclipse","github","solarized_light","textmate","tomorrow","xcode","kuroir","katzenmilch","ambiance","chaos","clouds_midnight","cobalt","idle_fingers","kr_theme","merbivore","merbivore_soft","mono_industrial","monokai","pastel_on_dark","solarized_dark","terminal","tomorrow_night","tomorrow_night_blue","tomorrow_night_bright","tomorrow_night_eighties","twilight","vibrant_ink"],e=m[a],c="editor-"+ +new Date(),b=["//jsbeautifier.org/js/lib/beautify.js","//jsbeautifier.org/js/lib/beautify-css.js","//jsbeautifier.org/js/lib/beautify-html.js","//d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js"];for(var d=0;d<b.length;d++){var k=document.createElement("script");k.setAttribute("type","text/javascript");k.setAttribute("charset","utf-8");k.setAttribute("src",b[d]);k.addEventListener("load",f,false);l.appendChild(k)}function f(){if(!window.js_beautify||!window.ace||!window.html_beautify||n!=="javascript"){return}if(n==="javascript"){j=js_beautify(j)}else{j=html_beautify(j)}h.innerHTML='<div id="'+c+'" style="position:absolute;top:0;right:0;bottom:0;left:0;">'+j+"</div>";var i=ace.edit(c);i.setTheme("ace/theme/"+e);i.getSession().setMode("ace/mode/"+n)}})();


