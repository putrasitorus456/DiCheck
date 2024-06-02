# DiCheck
DiCheck (meDical Check) merupakan suatu platform yang digunakan untuk mengembangkan layanan untuk prediksi penyakit berdasarkan input dari pengguna. Terdapat informasi saran pengobatan, obat, serta saran dari dokter terkait dengan perawatan.

### 👩🏻  Kelompok NT (NineTeen)  👦🏻 
- Ketua Kelompok  : Putra Agung A.M. Sitorus - 21/474928/TK/52423
- Anggota 1       : Salwa Maharani - 21/481194/TK/53113
- Anggota 2       : Yasmine 'Arfa Zahira - 21/478786/TK/52758

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
cd '.\dataset fix dicheck\'
python -m venv venv
venv\Scripts\activate 
pip install -r requirements.txt
uvicorn app:app --reload
```