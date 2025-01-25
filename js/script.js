function calculateBMI() {
  const weight = document.getElementById("input-berat-badan").value;
  const height = document.getElementById("input-tinggi-badan").value;

  if (weight > 0 && height > 0) {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    document.getElementById("result-bmi").innerText = bmi;

    let status = "";
    let kategori = "";
    if (bmi < 18.5) {
      status = "Kekurangan berat badan";
      kategori =
        "Anda termasuk dalam kategori Kekurangan berat badan, Untuk menaikkan berat badan yang sehat, Anda bisa melakukan surplus kalori, meningkatkan asupan protein, dan berolahraga secara rutin. ";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Normal (ideal)";
      kategori =
        "Anda termasuk dalam kategori Normal (ideal), pertahankan berat badan anda dengan berolahraga secara rutin dan mengonsumsi makanan yang sehat. ";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      status = "Kelebihan berat badan";
      kategori =
        "Anda termasuk dalam kategori Kelebihan Berat Badan, cara terbaik untuk menurunkan berat badan adalah dengan mengurangi asupan kalori dan berolahraga secara rutin. ";
    } else {
      status = "Kegemukan (Obesitas)";
      kategori =
        "Anda termasuk dalam kategori Kegemukan (overweight), cara terbaik untuk menurunkan berat badan adalah dengan mengurangi asupan kalori dan berolahraga secara rutin. ";
    }
    document.getElementById("result-status").innerText = status;
    document.getElementById("result-description").innerText = kategori;
  } else {
    alert("Please enter valid weight and height");
  }
}
