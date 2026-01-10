export function generateUsers() {
  const users = [];
  const userTypes = ["A", "B", "C", "D"];
  const regions = ["US", "EU", "ASIA", "LATAM"];
  const tiers = ["free", "premium", "enterprise"];

  for (let i = 0; i < 80; i++) {
    const userType = userTypes[i % 4];
    const region = regions[i % 4];
    
    let tier;
    if (i < 32) {
      tier = "free";
    } else if (i < 64) {
      tier = "premium";
    } else {
      tier = "enterprise";
    }

    users.push({
      identifier: `user_${i}`,
      email: `user${i}@example.com`,
      custom: {
        userType: userType,
        isTestUser: i % 2 === 0,
        region: region,
        tier: tier,
        index: i,
      },
    });
  }
  return users;
}