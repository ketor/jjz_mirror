
get_and_ln()
{
    file_name=$1
    file_name_date=`date +%Y%m%d`-$1

    echo $file_name
    echo $file_name_date

    unlink $file_name_date
    wget "http://jinjing365.com/jjz/""${2}""${file_name}" -O $file_name_date
    unlink $file_name
    ln -s $file_name_date $file_name
}

wget_file()
{
    unlink "$1"
    wget "http://jinjing365.com/jjz/$2$1"
}

mkdir css
mkdir img
mkdir js
mkdir rz

wget_file "index.html"
wget_file "ditu1.html"
wget_file "ditu2.html"
wget_file "iphone.html"
wget_file "222.png"
wget_file "3.png"
wget_file "5.png"
wget_file "newlogo (1).png"

cd js/
wget_file "app.js" "js/"
wget_file "bootstrap.min.js" "js/"
wget_file "data.js" "js/"
wget_file "jjz.js" "js/"
wget_file "jquery.js" "js/"
wget_file "uaredirect.js" "js/"
cd -

cd img/
wget_file "2w.jpg" "img/"
wget_file "65651.jpg" "img/"
wget_file "aex03943lr7cnwryfe8iz51.png" "img/"
cd -

cd css/
wget_file "bootstrap.min.css" "css/"
wget_file "commons.css" "css/"
wget_file "style.css" "css/"
cd -

cd rz/
wget_file "21.jpg" "rz/"
wget_file "index.php?page=1" "rz/"
wget_file "index.php?page=2" "rz/"
cd -


