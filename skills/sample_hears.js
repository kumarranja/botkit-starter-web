module.exports = function(controller) {


  controller.hears('test','message_received', function(bot, message) {

    bot.reply(message,'I heard a test');

  });

    controller.hears('Hello','message_received', function(bot, message) {

        bot.reply(message, "Hi ! I'm web Bot.");

    });

    controller.hears('conv','message_received', function(bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.ask('What should I call you?', function(response, convo) {
                bot.reply(response, "I will call you : " + response.text);
                convo.next();
            });

        });

        });


};
