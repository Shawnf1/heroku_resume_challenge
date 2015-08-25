/**
 * Created by Shawn on 7/21/2015.
 */
$(document).ready(function ()
{
   $('#show_btn').click(function(e)
   {
       e.preventDefault();
       if($('body').hasClass("hidden"))
       {
           $('body').removeClass("hidden");
           $(this).prop("value", "Hide Resume");
       }else
       {
           $('body').addClass("hidden");
           $(this).prop("value", "Show Resume");
       }
   });

});