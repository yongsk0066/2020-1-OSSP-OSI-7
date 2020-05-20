package models

type Quiz struct {
	QuizId int64 `db:"quiz_id" json:"quiz_id"`
	QuizSetId int64 `db:"quiz_set_id" json:"quiz_set_id"`
	QuizTitle string `db:"quiz_title" json:"quiz_title"`
	QuizContent string `db:"quiz_content" json:"quiz_content"`
	QuizAnswer string `db:"quiz_answer" json:"quiz_answer"`
}