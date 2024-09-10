/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr) {
  // Inisialisasi nilai maksimum sementara (maxCurrent) dan nilai maksimal subarray yang ditemukan (maxSum)
  let maxCurrent = arr[0];
  let maxSum = arr[0];

  // Variabel untuk indeks awal dan akhir dari subarray
  let first = 0;
  let end = 0;
  let tempStart = 0;

  // Iterasi dari elemen kedua (elemen pertama [0] sudah di-set ke maxCurrent dan maxSum)
  for (let i = 1; i < arr.length; i++) {
    // Jika menambah elemen saat ini (arr[i]) lebih buruk daripada memulai dari elemen itu sendiri, mulai subarray baru)
    if (arr[i] > maxCurrent + arr[i]) {
      maxCurrent = arr[i]; // Mulai subarray baru
      tempStart = i; // Simpan indeks awal dari subarray baru
    } else {
      // Jika menambah arr[i] ke maxCurrent masih memberikan hasil lebih baik, maka tambahkan elemen arr[i] ke subarray yang sedang berjalan.
      maxCurrent += arr[i];
    }

    // Jika subarray saat ini lebih baik daripada subarray terbaik yang ditemukan sejauh ini
    if (maxCurrent > maxSum) {
      maxSum = maxCurrent; // Update nilai maksimum maxSum
      first = tempStart; // Simpan indeks awal subarray terbaik
      end = i; // Simpan indeks akhir subarray terbaik
    }
  }

  // Mengembalikan subarray terbaik (dari indeks first hingga end dan jumlah dari subarray (maxSum))
  return [arr.slice(first, end + 1), maxSum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
