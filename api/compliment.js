export default function handler(req, res) {
  const fixedParts = [
    "Hey, lovely soul!",
    "Hi wonderful human!",
    "Hello beautiful!",
    "Hey amazing person!"
  ];

  const variableParts = [
    "You bring out the best in everyone around you.",
    "Your energy makes the world brighter.",
    "You are growing in all the right ways.",
    "Something great is headed your way today.",
    "You’re capable of incredible things."
  ];

  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const compliment = random(fixedParts) + " " + random(variableParts);

  res.status(200).json({
    compliment,
    timestamp: Date.now()
  });
}
