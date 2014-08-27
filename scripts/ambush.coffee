# Description:
#   Send messages to users the next time they speak
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot ambush <user name>: <message>
#   hubot ambush <user name>: --facepalm - will ambush a user with a facepalm image
#
# Author:
#   jmoses

appendAmbush = (data, toUser, fromUser, message) ->
  data[toUser.name] or= []

  data[toUser.name].push [fromUser.name, message]

module.exports = (robot) ->
  robot.brain.on 'loaded', =>
    robot.brain.data.ambushes ||= {}

  robot.respond /ambush (.*?): (.*)/i, (msg) ->
    users = robot.brain.usersForFuzzyName(msg.match[1].trim())
    facepalmTest = "/ /i"
    facepalm = "http://i.imgur.com/iWKad22.jpg"
    facepalmTest = /// #begin of line
    (^--facepalm$)
    ///i            #end of line and ignore case
    if users.length is 1 and users[0].name is 'bkerickson'
      user = users[0]
      if msg.match[2].match facepalmTest
        appendAmbush robot.brain.data.ambushes, msg.message.user, msg.message.user, facepalm
        msg.send "Nice try " + msg.message.user + "."

    else if users.length is 1
      user = users[0]
      if msg.match[2].match facepalmTest
        appendAmbush robot.brain.data.ambushes, user, msg.message.user, facepalm
      else
        appendAmbush robot.brain.data.ambushes, user, msg.message.user, msg.match[2]
      msg.send "Ambush prepared"
    else if users.length > 1
      msg.send "Too many users like that"
    else
      msg.send "#{msg.match[1]}? Never heard of 'em"

  robot.hear /./i, (msg) ->
    return unless robot.brain.data.ambushes?
    if (ambushes = robot.brain.data.ambushes[msg.message.user.name])
      for ambush in ambushes
        msg.send msg.message.user.name + ": while you were out, " + ambush[0] + " said: " + ambush[1]
      delete robot.brain.data.ambushes[msg.message.user.name]
