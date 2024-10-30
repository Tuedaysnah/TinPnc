let selectedContent = '';

function chonNoiDung(option) {
    const speedBfSw = document.getElementById('speedBfSw').value;
    const speedAfSw = document.getElementById('speedAfSw').value;

   if (option === 1) {
        selectedContent = `Trước swap ${speedBfSw} sau swap ${speedAfSw}. KT bàn giao 1 ONT, 1 3000cv2, 1 nguồn dài. Kh sd dv ok.`;
    } else if (option === 2) {
        selectedContent = `Trước swap ${speedBfSw} sau swap ${speedAfSw}. KT bàn giao 1 3000cv2, 1 nguồn dài. Confirm KH gửi lại modem cũ. Kh sử dụng ok.`;
    } else {
        selectedContent = `Trước swap ${speedBfSw} sau swap ${speedAfSw}. KT bàn giao 1 3000HI, 1 nguồn 1.5. Kh sử dụng ok.`;
    }

    alert('Đã chọn: ' + selectedContent);
}

function ketHop() {
    const soHd = document.getElementById('soHd').value;
    const soDienThoai1 = document.getElementById('soDienThoai1').value;
    const speedBfSw = document.getElementById('speedBfSw').value;
    const speedAfSw = document.getElementById('speedAfSw').value;

    // Tạo chuỗi kết hợp từ các giá trị đã nhập và nội dung đã chọn
    const ketQua = `${soHd} - ${soDienThoai1} - ${selectedContent}`;
    
    // Hiển thị kết quả vào textarea
    document.getElementById('chuoiKetHop').value = ketQua;
}

function copyChuoi() {
    const chuoiKetHop = document.getElementById('chuoiKetHop');
    chuoiKetHop.select();  // Chọn toàn bộ nội dung trong textarea
    document.execCommand('copy');  // Thực hiện sao chép vào clipboard
    alert('Đã copy chuỗi!');
}

function doiHinhNen() {
    const images = [
        'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/07/anh-thien-nhien-dep-3d.jpg.webp',
        'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/cuc-dep-hinh-nen-thien-nhien.jpg',
        'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-thien-nhien-20.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
}
