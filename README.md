# Shortcut LazyVim untuk Neovim

Menggunakan LazyVim sebagai konfigurasi untuk Neovim (nvim) dapat memberikan Anda banyak sekali shortcut yang berguna untuk berbagai macam tugas. Berikut adalah beberapa shortcut yang sering digunakan dalam LazyVim:

## Navigasi Dasar
- `:w` - Simpan file.
- `:q` - Keluar dari file.
- `:wq` - Simpan dan keluar.
- `:qa` - Keluar dari semua buffer.
- `:e <filename>` - Buka file.
- `:b <buffer>` - Pindah ke buffer tertentu.

## Mode Normal
- `h`, `j`, `k`, `l` - Pindah kiri, bawah, atas, kanan.
- `gg` - Pindah ke awal file.
- `G` - Pindah ke akhir file.
- `0` - Pindah ke awal baris.
- `$` - Pindah ke akhir baris.
- `w` - Pindah ke kata berikutnya.
- `b` - Pindah ke kata sebelumnya.
- `dd` - Hapus satu baris.
- `yy` - Salin satu baris.
- `p` - Tempel setelah kursor.
- `P` - Tempel sebelum kursor.

## Mode Visual
- `v` - Masuk ke mode visual.
- `V` - Masuk ke mode visual line.
- `Ctrl-v` - Masuk ke mode visual block.
- `y` - Salin pilihan.
- `d` - Hapus pilihan.
- `>` - Indentasi kanan.
- `<` - Indentasi kiri.

## Pencarian dan Penggantian
- `/` - Cari.
- `n` - Pencarian berikutnya.
- `N` - Pencarian sebelumnya.
- `:%s/old/new/g` - Ganti semua kemunculan `old` dengan `new`.

## Navigasi Tabs dan Windows
- `:tabnew` - Membuka tab baru.
- `gt` - Pindah ke tab berikutnya.
- `gT` - Pindah ke tab sebelumnya.
- `:split` - Membagi jendela horizontal.
- `:vsplit` - Membagi jendela vertikal.
- `Ctrl-w w` - Pindah antar jendela.
- `Ctrl-w q` - Tutup jendela saat ini.
- `Ctrl-w h/j/k/l` - Pindah ke jendela kiri/bawah/atas/kanan.

## Plug-in Manager (Lazy)
LazyVim menggunakan Lazy.nvim untuk mengelola plug-in. Berikut beberapa perintah umum:
- `:Lazy install` - Menginstal semua plug-in.
- `:Lazy update` - Memperbarui semua plug-in.
- `:Lazy clean` - Membersihkan plug-in yang tidak diperlukan.

## Shortcut Tambahan LazyVim
LazyVim menyediakan berbagai shortcut tambahan untuk mempercepat workflow Anda. Berikut beberapa di antaranya:

### Tree Explorer (Nvim-Tree)
- `Ctrl-n` - Toggle NvimTree.
- `Ctrl-r` - Refresh NvimTree.
- `a` - Tambahkan file atau direktori.
- `r` - Rename file atau direktori.
- `d` - Hapus file atau direktori.

### Telescope (Finder)
- `Ctrl-p` - Buka Telescope untuk mencari file.
- `Ctrl-f` - Cari teks dalam file.
- `Ctrl-b` - Cari buffer.
- `Ctrl-h` - Cari riwayat komando.

### LSP (Language Server Protocol)
- `gd` - Pindah ke definisi.
- `gr` - Pindah ke referensi.
- `K` - Tampilkan dokumentasi hover.
- `Ctrl-k` - Pindah ke signature help.
- `[d` - Pindah ke diagnosa sebelumnya.
- `]d` - Pindah ke diagnosa berikutnya.

### Git Integration (Fugitive)
- `:G` - Buka Git status.
- `:Gdiff` - Lihat diff.
- `:Gcommit` - Commit perubahan.
- `:Gpush` - Push ke remote.
- `:Gpull` - Pull dari remote.

### Snippets (LuaSnip)
- `Tab` - Expand snippet atau pindah ke placeholder berikutnya.
- `Shift-Tab` - Pindah ke placeholder sebelumnya.

### Format dan Linting
- `:Format` - Format dokumen menggunakan formatter yang telah dikonfigurasi.
- `:Lint` - Lint dokumen menggunakan linter yang telah dikonfigurasi.

## Shortcut Lainnya
- `u` - Undo.
- `Ctrl-r` - Redo.
- `:noh` - Hilangkan highlight dari pencarian.
- `.` - Ulangi perintah terakhir.
- `:` - Masuk ke command mode.
- `Ctrl-o` - Pindah sementara ke normal mode dari insert mode.
- `Ctrl-i` - Kembali ke posisi cursor terakhir.

Untuk memaksimalkan penggunaan LazyVim, Anda juga bisa melihat dokumentasi dari masing-masing plugin yang digunakan atau shortcut tambahan yang mungkin telah ditambahkan dalam konfigurasi LazyVim Anda.
