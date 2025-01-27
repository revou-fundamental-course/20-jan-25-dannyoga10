function calculateBMI(event) {
  event.preventDefault(); // mencegah form untuk melakukan submit dan merefresh halaman

  // mengambil nilai dari input berat badan dan tinggi badan
  const weight = document.getElementById("input-berat-badan").value;
  const height = document.getElementById("input-tinggi-badan").value;

  //cek apakah nilai berat badan dan tinggi badan valid
  if (weight > 0 && height > 0) {
    const heightInMeters = height / 100; // mengkonversi tinggi badan dari cm ke m
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    document.getElementById("result-bmi").innerText = bmi; // Menampilkan hasil perhitungan BMI

    let status = "";
    let kategori = "";

    // menentukan status dan kategori BMI
    if (bmi < 18.5) {
      status = "Kekurangan berat badan";
      kategori =
        "Anda termasuk dalam kategori Kekurangan berat badan, Untuk menaikkan berat badan yang sehat, Anda bisa melakukan surplus kalori, meningkatkan asupan protein, dan berolahraga secara rutin. ";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Normal (ideal)";
      kategori =
        "Anda termasuk dalam kategori Normal (ideal), Pertahankan berat badan anda dengan berolahraga secara rutin dan mengonsumsi makanan yang sehat. ";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      status = "Kelebihan berat badan";
      kategori =
        "Anda termasuk dalam kategori Kelebihan Berat Badan, cara terbaik untuk menurunkan berat badan adalah dengan mengurangi asupan kalori dan berolahraga secara rutin. ";
    } else {
      status = "Kegemukan (Obesitas)";
      kategori =
        "Anda termasuk dalam kategori Kegemukan (overweight), cara terbaik untuk menurunkan berat badan adalah dengan mengurangi asupan kalori dan berolahraga secara rutin. ";
    }

    // Menampilkan status dan kategori BMI
    document.getElementById("result-status").innerText = status;
    document.getElementById("result-description").innerText = kategori;
  } else {
    alert("Please enter valid weight and height"); // Menampilkan pesan error jika nilai berat badan atau tinggi badan tidak valid
  }
}

// Menjalankan fungsi calculateBMI ketika form di submit
document.querySelector("form").addEventListener("submit", calculateBMI);

// fungsi untuk mereset form
function resetForm() {
  // mengosongkan input field
  document.getElementById("input-berat-badan").value = "";
  document.getElementById("input-tinggi-badan").value = "";
  document.getElementById("input-usia").value = "";

  // mengosongkan hasil perhitungan BMI
  document.getElementById("result-bmi").innerText = "";
  document.getElementById("result-status").innerText = "";
  document.getElementById("result-description").innerText = "";
}

// Menjalankan fungsi resetForm ketika tombol reset di klik
document.getElementById("reset-button").addEventListener("click", resetForm);
