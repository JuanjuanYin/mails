$(document).ready(function () {

  var mail_sender, date, mail_date, mail_body, mail_read_panel_style;

  //Get mails via ajax
  $.ajax({
    type: 'GET',
    url: 'http://www.mocky.io/v2/580df778120000f60c078747',
    dataType: 'jsonp',
    success: function (data) {

      //Loop through each mail
      for (var x = 0; x < data.length; x++) {

        //Set date according to mail status
        if (data[x].status == 'DRAFT') {
          date = '<span class="label label-warning">Entwurf</span>';
        } else {
          date = data[x].date.substr(0, 10);
        }

        //Format sender name and sender mail address
        mail_sender = '<span class="mail-sender">' + data[x].name + ' &#8249;' + data[x].email + '&#8250;' + '</span>';

        //Format mail date
        mail_date = '<span class="mail-date">' + date + '</span>';

        //Format mail body
        mail_body = '<span class="mail-body">' + data[x].body + '</span>';

        //Format mail panel according to read/unread
        if (!data[x].read) {
          mail_read_panel_style = '<div class="panel-body mail-unread">';
        } else {
          mail_read_panel_style = '<div class="panel-body">';
        }

        //Put mail into panel
        var content =
          '<div class="panel panel-default">' +

          mail_read_panel_style +
          mail_sender + mail_date + '<br>' + data[x].subject + ' - ' + mail_body +
          '</div>' +

          '</div>';

        //Display each mail panel
        $("#mails").append(content);
      }

      //Reduce font weight of unread mail if clicked
      $('.mail-unread').on('click', function () {
        $(this).removeClass('mail-unread');
      });
    }
  });
});