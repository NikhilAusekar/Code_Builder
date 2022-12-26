
            function updateOutput() {

                $("iframe").contents().find("html").html("<html><head><style type ='text/css'>" +
                 $("#cssPanel").val() + "</style></head><body>" + 
                 $("#htmlPanel").val() + "</body></html>");

                document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
                
            }

            $(".button").hover(function () {
                $(this).addClass("highlightblue");
            }, function () {
                $(this).removeClass("highlightblue")
            });



            $(".button").click(function () {

                $(this).toggleClass("active");

                $(this).removeClass("highlightbule");

                var panelId = $(this).attr("id") + "Panel";

                $("#" + panelId).toggleClass("hidden");

                var numberOfActivePannels = 4 - $('.hidden').length;

                $(".panel").width(($(window).width() / numberOfActivePannels)-10) ;
            })


            $(".panel").height($(window).height() - $("#div1").height() -10);
            $(".panel").width(($(window).width() /2)-10);

            updateOutput();

            $("textarea").on('change keyup paste', function () {
                updateOutput();
            })

        

    