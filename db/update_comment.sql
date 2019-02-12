update ratings
SET comments=$1
where id=$2 AND users_id=$3;

select *from ratings
WHERE student_id=$4;