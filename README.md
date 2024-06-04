# DiCheck
DiCheck (meDical Check) merupakan suatu platform yang digunakan untuk mengembangkan layanan untuk prediksi penyakit berdasarkan input dari pengguna. Terdapat informasi saran pengobatan, obat, serta saran dari dokter terkait dengan perawatan.

### 👩🏻  Kelompok Besar 5  👦🏻 
- Kelompok 18 (Valentinus Wastu Rosari, Zildiray Alfirli)
- Kelompok 19 (Diestra Pradana Duta Ramadhan, Ega Rizky Setiawan, Daffa Kamal)
- Kelompok 20 (Putra Agung A. M. Sitorus, Rico Frijaya S. Pane)
- Kelompok 21 (Izzat Arroyyan, Antonius Daiva Prabawisesa, Muhammad Ismail Azmi)
- Kelompok 28 (Aly Murry Darmoko, Nikolas Galih Saputro)

## How to Run in Local

Front-End:

```bash
cd .\frontend\
npm install
npm run dev
```

Back-End:

```bash
cd .\backend\
npm install
npm run dev
```

AI:

```bash
cd '.\dataset_fix_dicheck\'
python -m venv venv
venv\Scripts\activate 
pip install -r requirements.txt
uvicorn app:app --reload
```
