/// <reference types="cypress" />

describe('login functionality', () => {
    
    it ('Login Ayo Indonesia', () => {
            cy.visit('https://ayo.co.id/')// acces web ayo
            cy.get('[href="#"]').contains('Masuk').click() // klik button "masuk"
            cy.wait(1000) // Memberikan jeda waktu 1 detik
            cy.get('input[name="_phone"]').type('fandiagus07@gmail.com') // input email pada kolom email
            cy.get('[type="button"]').contains('Selanjutnya').click() // klik button selanjutnya
            cy.get('input[name="password"]').type('fandicher19') // input password pada kolom password
            cy.get('[type="button"]').contains('Masuk').click() // klik tombol masuk
            cy.get('[href="https://ayo.co.id/venues"]').click() // klik button menu sewa lapangan
            cy.get('input[id="country_name"]').type('bekasi') // input kota yang diinginkan pada kolom kota
            cy.get('[type="submit"]').contains('Cari venue').click() // klik button cari venue
            cy.get('[alt="Forliva Badminton"]').click() // klik salah satu venue, contoh : FORLIVA BADMINTON
            cy.contains(/forliva badminton/i).should('exist') // validasi apakah di halaman tersebut benar venue FORLIVA BADMINTON dengan memberi perintah mencari kata forliva badminton
            cy.contains(/deskripsi/i).should('exist') // validasi apakah halaman detail venue terdapat paragraf DESKRIPSI sesuai rekuirement
            cy.contains(/lokasi/i).should('exist') // validasi apakah halaman detail venue terdapat paragraf LOKASI sesuai rekuirement
            cy.contains(/fasilitas/i).should('exist') // validasi apakah halaman detail venue terdapat paragraf FASILITAS sesuai rekuirement
            cy.contains(/pilih lapangan/i).should('exist') // validasi apakah halaman detail venue terdapat paragraf PILIH LAPANGAN sesuai rekuirement
            cy.contains(/ulasan/i).should('exist') // validasi apakah halaman detail venue terdapat paragraf ULASAN sesuai rekuirement
            cy.contains(/Reschedule & Pembatalan/i).should('exist') // validasi apakah halaman detail venue terdapat RESCHEDULE deskripsi sesuai rekuirement
            cy.contains(/Rekomendasi Venue Terdekat/i).should('exist') // (untuk memastikan apakah elemen REKOMENDASI VENUE ada di halaman yang diakses)
            
            //cy.contains(/Tidak ada elemen/i).should('exist') // (kondisi dimana elemen tertentu tidak ada di halaman tersebut)
            
            cy.get('[date="2024-12-11"]').click() // klik tanggal sesuai yang diinginkan

            // pengujian automation hingga sampai tahap ini, karena untuk pengujian yang melibatkan Fitur Pembayaran hingga data Customer
            // sebaiknya dilakukan secara manual testing, karena salah satu keunggulan manual testing adalah saat melakukan eksekusi testing
            // tester bisa lebih hati hati, sedangan jika system yang melakukan testing dari skenario yang sudah dibuat, tester bisa saja membuat kesalahan saat membuat script automation

        })
    
    })
